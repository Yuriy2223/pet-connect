import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Ім’я є обов’язковим'),
  email: Yup.string().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Некоректний формат email').required('Email є обов’язковим'),
  avatar: Yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Некоректне посилання на аватар'),
  phone: Yup.string().matches(/^\+38\d{10}$/, 'Некоректний формат телефону'),
});

export const ModalEditUser: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    // Логіка відправки даних на backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} placeholder="Ім’я" />
      {errors.name && <p>{errors.name.message}</p>}
      {/* Додаткові поля для email, avatar, phone */}
      <button type="submit">Зберегти</button>
    </form>
  );
};
