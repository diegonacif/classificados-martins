import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../services/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AdInput, AdInputLabel, CreateAdContainer, CreateAdInputWrapper, ErrorMsg, ImgPreviewContainer } from './styles';
import { Header } from '../../components/Header';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Selector } from './components/Selector';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { CheckCircle, Images, Plus, Trash } from '@phosphor-icons/react';

interface IFormInput {
  title: string;
  description?: string;
  price: number;
  city: string;
  neighborhood?: string;
}

interface OptionType {
  value: string;
  label: string;
}

const schema = yup.object().shape({
  title: yup.string().required('Título precisa ser preenchido'),
  description: yup.string(),
  price: yup.number().required('Preço precisa ser informado').positive('Apenas valores positivos'),
  city: yup.string().required('Cidade precisa ser informado'),
  neighborhood: yup.string(),
});

export function CreateAd() {
  const { register, handleSubmit, formState: { errors }, setValue, watch, clearErrors } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [cities, setCities] = useState<OptionType[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  // const [imagesUpload, setImagesUpload] = useState<FileList | null>(null);
  const [imagesUpload, setImagesUpload] = useState<File[]>([]);
  const [imagesPreviews, setImagesPreviews] = useState<string[]>([]);
  const [user] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_IMAGES = 3; // Número máximo de imagens permitidas

  useEffect(() => {
    // Fetch cities for Rio Grande do Norte from IBGE API
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/24/municipios') // 24 is the ID for Rio Grande do Norte
      .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const citiesData = response.data.map((city: any) => ({ value: city.id, label: city.nome }));
        setCities(citiesData);
      })
      .catch(error => console.error('Error fetching cities: ', error));
  }, []);

  useEffect(() => {
    const previews = imagesUpload.map(file => URL.createObjectURL(file));
    setImagesPreviews(previews);
  }, [imagesUpload]);

  const uploadImage = async (file: File, adId: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `images/${adId}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(`state changed: ${snapshot}`)
        },
        error => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const adId = uuid();

    const uploadedImageUrls = await Promise.all(imagesUpload.map(file => uploadImage(file, adId)));

    const adData = {
      ...data,
      images: uploadedImageUrls,
      createdAt: Timestamp.now(),
      status: 'inactive', // Inicializa o status como 'inactive'
      userId: user.uid, // ID do usuário autenticado
    };

    try {
      await setDoc(doc(db, 'ads', adId), adData);
      console.log('Ad created successfully');
    } catch (error) {
      console.error('Error creating ad: ', error);
    }
  };

  const handleCityChange = (selectedOption: string) => {
    setSelectedCity(selectedOption);
    setValue('city', selectedOption ? selectedOption : '');
    selectedOption.length !== 0 && clearErrors('city')
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    const validFiles = selectedFiles.filter(file => validImageTypes.includes(file.type));
    if (validFiles.length + imagesUpload.length > MAX_IMAGES) {
      setErrorMessage(`Você pode carregar no máximo ${MAX_IMAGES} imagens.`);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    if (validFiles.length !== selectedFiles.length) {
      setErrorMessage('Apenas arquivos de imagem são permitidos.');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setImagesUpload(prevImages => [...prevImages, ...selectedFiles.slice(0, MAX_IMAGES - prevImages.length)]);
    setErrorMessage(null);
  };

  const handleRemoveImage = (index: number) => {
    setImagesUpload(prevImages => prevImages.filter((_, i) => i !== index));
    setImagesPreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };


  return (
    <>
      <Header />
      <CreateAdContainer>
        <h2>Crie seu anúncio</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateAdInputWrapper>
            <AdInputLabel>Título</AdInputLabel>
            <AdInput placeholder='obrigatório' className={errors.title && 'with-error'} {...register('title')} />
            {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Descrição</AdInputLabel>
            <textarea placeholder='descrição do produto ou serviço' className={errors.description && 'with-error'} {...register('description')} />
            {errors.description && <ErrorMsg>{errors.description.message}</ErrorMsg>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Preço</AdInputLabel>
            <AdInput 
              placeholder='obrigatório' 
              type="number" 
              className={errors.price && 'with-error'}
              {...register('price', {
                valueAsNumber: true,
              })} 
            />
            {errors.price && <ErrorMsg>{isNaN(watch('price')) ? 'Preço precisa ser preenchido' : errors.price.message}</ErrorMsg>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <Selector
              handleChanger={handleCityChange}
              cities={cities}
              selectedCity={selectedCity}
              error={!!errors.city}
            />
            {errors.city && <ErrorMsg>{errors.city.message}</ErrorMsg>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Bairro</AdInputLabel>
            <AdInput 
              placeholder='opcional' 
              className={errors.neighborhood && 'with-error'}
              {...register('neighborhood')} 
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </CreateAdInputWrapper>
          
          {
            imagesPreviews.length === 0 && (
              <ImgPreviewContainer>
                <label htmlFor="fileInput" className="plus-wrapper">
                  <div className="plus-button">
                    <Images size={32} />
                    <Plus size={16} id="plus-circle" weight="bold"/>
                  </div>
                  <span>Adicionar fotos</span>
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  id="fileInput"
                />
                <span id="preview-counter">Fotos 0/3</span>
              </ImgPreviewContainer>
            )
          }
          {imagesPreviews.length > 0 && (
            <ImgPreviewContainer id="grid-version">
              {imagesPreviews.map((preview, index) => (
                <div key={index} className="preview-wrapper">
                  <img key={index} src={preview} alt={`Preview ${index}`} className="preview-img" />
                  <Trash 
                    size={32} 
                    color="#e01b24" 
                    weight="fill" 
                    id="delete-image-button" 
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
              ))}
              {
                imagesPreviews.length < 3 ? (
                  <>
                    <label htmlFor="fileInput" className="plus-wrapper">
                      <div className="plus-button">
                        <Images size={32} />
                        <Plus size={16} id="plus-circle" weight="bold"/>
                      </div>
                      <span>Adicionar fotos</span>
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                  </>
                ) : (
                  <CheckCircle size={36} weight="bold" color="#00873d" id="done-icon" />
                )
              }
              <span id="preview-counter">Fotos {imagesPreviews.length}/3</span>
            </ImgPreviewContainer>
          )}
          {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}

          <button type="submit" id="submit-button">Criar anúncio</button>
        </form>
      </CreateAdContainer>
    </>
  )
}