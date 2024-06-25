import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../services/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AdInput, AdInputLabel, CreateAdContainer, CreateAdInputWrapper } from './styles';
import { Header } from '../../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Selector } from './components/Selector';

interface IFormInput {
  title: string;
  description: string;
  price: number;
  city: string;
  neighborhood?: string;
}

interface OptionType {
  value: string;
  label: string;
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required').positive('Price must be a positive number'),
  city: yup.string().required('City is required'),
  neighborhood: yup.string(),
});

export function CreateAd() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [cities, setCities] = useState<OptionType[]>([]);
  // const [selectedCity, setSelectedCity] = useState<{ value: string; label: string } | null>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Fetch cities for Rio Grande do Norte from IBGE API
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/24/municipios') // 24 is the ID for Rio Grande do Norte
      .then(response => {
        const citiesData = response.data.map((city: any) => ({ value: city.id, label: city.nome }));
        setCities(citiesData);
      })
      .catch(error => console.error('Error fetching cities: ', error));
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const adData = {
      ...data,
      createdAt: Timestamp.now(),
      status: 'inactive', // Inicializa o status como 'inactive'
      userId: user.uid, // ID do usuário autenticado
    };

    try {
      await addDoc(collection(db, 'ads'), adData);
      console.log('Ad created successfully');
    } catch (error) {
      console.error('Error creating ad: ', error);
    }
  };

  const handleCityChange = (selectedOption: string) => {
    setSelectedCity(selectedOption);
    setValue('city', selectedOption ? selectedOption : '');
  };


  return (
    <>
      <Header />
      <CreateAdContainer>
        <h2>Crie seu anúncio</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateAdInputWrapper>
            <AdInputLabel>Título</AdInputLabel>
            <AdInput placeholder='obrigatório' {...register('title')} />
            {errors.title && <p>{errors.title.message}</p>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Descrição</AdInputLabel>
            <textarea placeholder='descrição do produto ou serviço' {...register('description')} />
            {errors.description && <p>{errors.description.message}</p>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Preço</AdInputLabel>
            <AdInput placeholder='obrigatório' type="number" {...register('price')} />
            {errors.price && <p>{errors.price.message}</p>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <Selector
              handleChanger={handleCityChange}
              cities={cities}
              selectedCity={selectedCity}
            />
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <AdInputLabel>Neighborhood</AdInputLabel>
            <AdInput placeholder='opcional' {...register('neighborhood')} />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </CreateAdInputWrapper>

          <button type="submit">Criar anúncio</button>
        </form>
      </CreateAdContainer>
    </>
  )
}