import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { ModalEditUserContainer } from './ModalEditUser.styled';

const schemaEditUser = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid avatar URL'
    )
    .required('Avatar is required'),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, 'Invalid phone number')
    .required('Phone is required'),
});

interface FormData {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

export const ModalEditUser: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schemaEditUser),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Запит на бекенд
      const response = await fetch('/api/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      toast.success('Profile updated successfully!');
      dispatch(closeModal());
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Something went wrong'
      );
    }
  };

  return (
    <ModalEditUserContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Avatar URL" {...register('avatar')} />
        <p>{errors.avatar?.message}</p>

        <input type="text" placeholder="Name" {...register('name')} />
        <p>{errors.name?.message}</p>

        <input type="email" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <input type="text" placeholder="Phone" {...register('phone')} />
        <p>{errors.phone?.message}</p>

        <button type="submit">Save</button>
      </form>
    </ModalEditUserContainer>
  );
};

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeModal } from '../../redux/modal/slice';
// import { logoutUser } from '../../redux/auth/operations';
// import { selectModalType } from '../../redux/modal/selectors';
// import { AppDispatch } from '../../redux/store';
// import {
//   LogautImageWrapper,
//   ModalButtonClose,
//   ModalButtonWrapper,
//   ModalButtonYes,
//   ModalLogaut,
// } from './ModalApproveAction.styled';

// export const ModalApproveAction: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const modalType = useSelector(selectModalType);

//   if (modalType !== 'ModalApproveAction') return null;

//   const handleLogout = async () => {
//     await dispatch(logoutUser());
//     dispatch(closeModal());
//   };

//   return (
//     <ModalLogaut>
//       <LogautImageWrapper>
//         <div></div>
//       </LogautImageWrapper>
//       <h2>Already leaving?</h2>
//       <ModalButtonWrapper>
//         <ModalButtonYes onClick={handleLogout}>Yes</ModalButtonYes>
//         <ModalButtonClose onClick={() => dispatch(closeModal())}>
//           Cancel
//         </ModalButtonClose>
//       </ModalButtonWrapper>
//     </ModalLogaut>
//   );
// };
