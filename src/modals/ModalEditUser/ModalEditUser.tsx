import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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

export const ModalEditUser: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaEditUser),
  });

  const onSubmit = async data => {
    // Логіка відправки даних на backend
  };

  return (
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
