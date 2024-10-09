import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'The password must contain at least 6 characters')
    .required('This field is required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The name must contain at least 3 characters')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'The password must contain at least 6 characters')
    .required('This field is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

// export const registerSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Name must be at least 3 characters')
//     .max(50, 'Name cannot be longer than 50 characters')
//     .required('Name is required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 8 characters')
//     .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//     .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .matches(/[0-9]/, 'Password must contain at least one number')
//     .matches(
//       /[@$!%*?&#]/,
//       'Password must contain at least one special character (@, $, !, %, *, ?, & or #)'
//     )
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
//     .required('Confirm Password is required'),
// });
