import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { uploadImage } from '../../utils/uploadImages';
import { editUserSchema } from '../../components/Common/ValidationSchemas';
import { closeModal } from '../../redux/modal/slice';
import { useAppDispatch } from '../../redux/store';
import { selectUserProfile } from '../../redux/user/selectors';
import { updateUserProfile } from '../../redux/user/operations';
import {
  Button,
  EditFormWraper,
  ErrorText,
  IconAvatar,
  IconUploadBtnAvatar,
  InputStyled,
  LabelInput,
  ModalEditUserContainer,
  UploadButtonAvatar,
  UploadWrapperAvatar,
  UploadWrapperInputEndBtn,
  WrapperInputsBlok,
} from './ModalEditUser.styled';

export interface EditUser {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

export interface InputProps {
  isValid?: boolean;
}

export interface FocusedProps {
  isFieldFocused?: boolean;
}

export const ModalEditUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useSelector(selectUserProfile);
  const [uploadedImage, setUploadedImage] = useState(userProfile?.avatar || '');
  const [inputStates, setInputStates] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    avatar: undefined,
  });

  const [isFieldFocused, setIsFieldFocused] = useState({
    name: false,
    email: false,
    phone: false,
    avatar: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      avatar: userProfile?.avatar || '',
      name: userProfile?.name || '',
      email: userProfile?.email || '',
      phone: userProfile?.phone || '',
    },
  });

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const uploadedUrl = await uploadImage(file);
    if (uploadedUrl) {
      setUploadedImage(uploadedUrl);
      setValue('avatar', uploadedUrl);
    }
  };

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

  const getErrorMessage = (field: keyof typeof inputStates) => {
    if (inputStates[field])
      return `${field[0].toUpperCase() + field.slice(1)} is valid`;
    return errors[field]?.message || '';
  };

  const onSubmit = async (data: EditUser) => {
    try {
      await dispatch(updateUserProfile({ ...data }));
      toast.success('Profile updated successfully!');
      reset();
      clearErrors();
      setInputStates({
        name: undefined,
        email: undefined,
        phone: undefined,
        avatar: undefined,
      });

      setIsFieldFocused({
        name: false,
        email: false,
        phone: false,
        avatar: false,
      });
      dispatch(closeModal());
    } catch {
      toast.error('An error occurred.');
    }
  };

  return (
    <ModalEditUserContainer>
      <h2>Edit information</h2>
      <EditFormWraper onSubmit={handleSubmit(onSubmit)}>
        <UploadWrapperAvatar>
          {uploadedImage ? (
            <img src={uploadedImage} alt="Avatar" />
          ) : (
            <IconAvatar iconName="user" />
          )}
        </UploadWrapperAvatar>
        <UploadWrapperInputEndBtn>
          <input
            type="text"
            placeholder="URL"
            {...register('avatar')}
            readOnly
          />
          <ErrorText
            isValid={inputStates.avatar}
            isFieldFocused={isFieldFocused.avatar}
          >
            {inputStates.email
              ? 'Email is valid'
              : errors.avatar?.message || ''}
          </ErrorText>
          <UploadButtonAvatar htmlFor="file-upload">
            Upload photo <IconUploadBtnAvatar iconName="upload-cloud" />
          </UploadButtonAvatar>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileUpload}
          />
        </UploadWrapperInputEndBtn>
        <WrapperInputsBlok>
          <LabelInput>
            <InputStyled
              type="text"
              placeholder="Name"
              {...register('name')}
              onBlur={() => handleBlur('name')}
              onFocus={() => handleFocus('name')}
              // isValid={inputStates.name}
            />

            {/* <ErrorText
              isValid={inputStates.name}
              isFieldFocused={isFieldFocused.name}
            >
              {inputStates.name ? 'Name is valid' : errors.name?.message || ''}
            </ErrorText> */}
            <ErrorText
              isValid={inputStates.name}
              isFieldFocused={isFieldFocused.name}
            >
              {getErrorMessage('name')}
            </ErrorText>
          </LabelInput>
          <LabelInput>
            <InputStyled
              type="email"
              placeholder="Email"
              {...register('email')}
              onBlur={() => handleBlur('email')}
              onFocus={() => handleFocus('email')}
              // isValid={inputStates.email}
              autoComplete="username"
            />

            {/* <ErrorText
              isValid={inputStates.email}
              isFieldFocused={isFieldFocused.email}
            >
              {inputStates.email
                ? 'Email is valid'
                : errors.email?.message || ''}
            </ErrorText> */}
            <ErrorText
              isValid={inputStates.email}
              isFieldFocused={isFieldFocused.email}
            >
              {getErrorMessage('email')}
            </ErrorText>
          </LabelInput>
          <LabelInput>
            <InputStyled
              type="text"
              placeholder="Phone"
              {...register('phone')}
              // isValid={inputStates.phone}
              autoComplete="tel"
            />

            {/* <ErrorText
              isValid={inputStates.phone}
              isFieldFocused={isFieldFocused.phone}
            >
              {inputStates.phone
                ? 'Phone is valid'
                : errors.phone?.message || ''}
            </ErrorText> */}
            <ErrorText
              isValid={inputStates.phone}
              isFieldFocused={isFieldFocused.phone}
            >
              {getErrorMessage('phone')}
            </ErrorText>
          </LabelInput>
        </WrapperInputsBlok>
        <Button type="submit">Go to profile</Button>
      </EditFormWraper>
    </ModalEditUserContainer>
  );
};
