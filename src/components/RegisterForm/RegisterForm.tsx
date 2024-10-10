import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { registerSchema } from '../Common/ValidationSchemas';
import {
  FormWrapper,
  InputWrapper,
  Input,
  Icon,
  ErrorText,
  Button,
  Title,
  SubText,
  WrongIcon,
  RightIcon,
  FaEyeSlashIcon,
  FaEyeIcon,
  ShowPasswordIcon,
  InputWrapperPass,
  ValidationIcon,
  RegisterLink,
  InputContainer,
  WrapperLink,
  WrapperLinkRegister,
} from './RegisterForm.styled';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [inputStates, setInputStates] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const [isFieldFocused, setIsFieldFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleBlur = async (field: keyof typeof inputStates) => {
    const isValid = await trigger(field);
    setInputStates(prevState => ({
      ...prevState,
      [field]: isValid,
    }));
    setIsFieldFocused(prevState => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleFocus = (field: keyof typeof isFieldFocused) => {
    setIsFieldFocused(prevState => ({
      ...prevState,
      [field]: true,
    }));
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.error('This email is already in use.');
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Registration</Title>
      <SubText>Thank you for your interest in our platform.</SubText>

      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Name"
            {...register('name')}
            onBlur={() => handleBlur('name')}
            onFocus={() => handleFocus('name')}
            isValid={inputStates.name}
          />
          <Icon isFieldFocused={isFieldFocused.name}>
            {inputStates.name ? (
              <RightIcon width={18} height={18} iconName="check" />
            ) : errors.name ? (
              <WrongIcon width={18} height={18} iconName="close" />
            ) : (
              ''
            )}
          </Icon>
          <ErrorText
            isValid={inputStates.name}
            isFieldFocused={isFieldFocused.name}
          >
            {inputStates.name ? 'Name is valid' : errors.name?.message || ''}
          </ErrorText>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            onBlur={() => handleBlur('email')}
            onFocus={() => handleFocus('email')}
            isValid={inputStates.email}
            autoComplete="username"
          />
          <Icon isFieldFocused={isFieldFocused.email}>
            {inputStates.email ? (
              <RightIcon width={18} height={18} iconName="check" />
            ) : errors.email ? (
              <WrongIcon width={18} height={18} iconName="close" />
            ) : (
              ''
            )}
          </Icon>
          <ErrorText
            isValid={inputStates.email}
            isFieldFocused={isFieldFocused.email}
          >
            {inputStates.email ? 'Email is valid' : errors.email?.message || ''}
          </ErrorText>
        </InputWrapper>

        <InputWrapperPass>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
            onBlur={() => handleBlur('password')}
            onFocus={() => handleFocus('password')}
            isValid={inputStates.password}
            autoComplete="new-password"
          />
          <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEyeSlashIcon width={18} height={18} iconName="eye-off" />
            ) : (
              <FaEyeIcon width={18} height={18} iconName="eye" />
            )}
          </ShowPasswordIcon>

          <ValidationIcon isFieldFocused={isFieldFocused.password}>
            {inputStates.password ? (
              <RightIcon width={18} height={18} iconName="check" />
            ) : errors.password ? (
              <WrongIcon width={18} height={18} iconName="close" />
            ) : (
              ''
            )}
          </ValidationIcon>
          <ErrorText
            isValid={inputStates.password}
            isFieldFocused={isFieldFocused.password}
          >
            {inputStates.password
              ? 'Password is secure'
              : errors.password?.message || ''}
          </ErrorText>
        </InputWrapperPass>

        <InputWrapperPass>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            {...register('confirmPassword')}
            onBlur={() => handleBlur('confirmPassword')}
            onFocus={() => handleFocus('confirmPassword')}
            isValid={inputStates.confirmPassword}
            autoComplete="new-password"
          />
          <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEyeSlashIcon width={18} height={18} iconName="eye-off" />
            ) : (
              <FaEyeIcon width={18} height={18} iconName="eye" />
            )}
          </ShowPasswordIcon>
          <ValidationIcon isFieldFocused={isFieldFocused.confirmPassword}>
            {inputStates.confirmPassword ? (
              <RightIcon width={18} height={18} iconName="check" />
            ) : errors.confirmPassword ? (
              <WrongIcon width={18} height={18} iconName="close" />
            ) : (
              ''
            )}
          </ValidationIcon>
          <ErrorText
            isValid={inputStates.confirmPassword}
            isFieldFocused={isFieldFocused.confirmPassword}
          >
            {inputStates.confirmPassword
              ? 'Passwords match'
              : errors.confirmPassword?.message || ''}
          </ErrorText>
        </InputWrapperPass>
      </InputContainer>
      <Button type="submit">REGISTRATION</Button>
      <WrapperLink>
        <WrapperLinkRegister>
          Already have an account?
          <RegisterLink to="/login">Login</RegisterLink>
        </WrapperLinkRegister>
      </WrapperLink>
    </FormWrapper>
  );
};