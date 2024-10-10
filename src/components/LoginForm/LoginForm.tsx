import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../Common/ValidationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  ErrorText,
  FaEyeIcon,
  FaEyeSlashIcon,
  FormWrapper,
  Icon,
  Input,
  InputContainetr,
  InputWrapper,
  InputWrapperPass,
  LoginLink,
  RightIcon,
  ShowPasswordIcon,
  SubText,
  Title,
  ValidationIcon,
  WrapperLink,
  WrapperLinkLogin,
  WrongIcon,
} from './LoginForm.styled';

interface FormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [inputStates, setInputStates] = useState({
    email: undefined,
    password: undefined,
  });

  const [isFieldFocused, setIsFieldFocused] = useState({
    email: false,
    password: false,
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
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Log in</Title>
      <SubText>
        Welcome! Please enter your credentials to login to the platform:
      </SubText>
      <InputContainetr>
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
            autoComplete="current-password"
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
      </InputContainetr>

      <Button type="submit">LOG IN</Button>
      <WrapperLink>
        <WrapperLinkLogin>
          Don't have an account?<LoginLink to="/register"> Register</LoginLink>
        </WrapperLinkLogin>
      </WrapperLink>
    </FormWrapper>
  );
};