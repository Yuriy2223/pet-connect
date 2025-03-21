import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'The password must contain at least 7 characters')
    .required('Password is required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot be longer than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'The password must contain at least 7 characters')
    .required('This field is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const addPetSchema = Yup.object().shape({
  sex: Yup.string().required('Sex is required'),
  imgURL: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid URL format'
    )
    .required('Image url is required'),
  title: Yup.string().required('Title is required'),
  name: Yup.string().required('Name is required'),
  species: Yup.string().required('Species is required'),
  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
    .required('Birthday is required'),
});

export const editUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot be longer than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  avatar: Yup.string()
    .optional()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|webp)$/, 'Invalid avatar URL'),
  phone: Yup.string()
    .optional()
    .matches(/^\+38\d{10}$/, 'Invalid phone number'),
});
