import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../services/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CreateAdContainer, CreateAdInputWrapper } from './styles';
import { Header } from '../../components/Header';

interface IFormInput {
  title: string;
  description: string;
  price: number;
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required').positive('Price must be a positive number'),
});

export function CreateAd() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [user] = useAuthState(auth);

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

  return (
    <>
      <Header />
      <CreateAdContainer>
        <h2>Crie seu anúncio</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateAdInputWrapper>
            <label>Título</label>
            <input placeholder='obrigatório' {...register('title')} />
            {errors.title && <p>{errors.title.message}</p>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <label>Descrição</label>
            <textarea placeholder='descrição do produto ou serviço' {...register('description')} />
            {errors.description && <p>{errors.description.message}</p>}
          </CreateAdInputWrapper>

          <CreateAdInputWrapper>
            <label>Preço</label>
            <input placeholder='obrigatório' type="number" {...register('price')} />
            {errors.price && <p>{errors.price.message}</p>}
          </CreateAdInputWrapper>

          <button type="submit">Criar anúncio</button>
        </form>
      </CreateAdContainer>
    </>
  )
}