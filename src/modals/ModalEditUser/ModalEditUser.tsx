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
  SubmitButton,
  EditForm,
  ErrorMessage,
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

export const ModalEditUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useSelector(selectUserProfile);
  const [uploadedImage, setUploadedImage] = useState(userProfile?.avatar || '');

  const [isFocused, setIsFocused] = useState({
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

  const handleBlur = async (field: keyof typeof isFocused) => {
    await trigger(field);
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleFocus = (field: keyof typeof isFocused) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const onSubmit = async (data: EditUser) => {
    try {
      await dispatch(updateUserProfile({ ...data }));
      toast.success('Profile updated successfully!');
      reset(data);
      dispatch(closeModal());
    } catch {
      toast.error('An error occurred.');
    }
  };

  return (
    <ModalEditUserContainer>
      <h2>Edit information</h2>
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <UploadWrapperAvatar>
          {uploadedImage ? (
            <img src={uploadedImage} alt="Avatar" />
          ) : (
            <IconAvatar iconName="user" />
          )}
        </UploadWrapperAvatar>
        <UploadWrapperInputEndBtn $hasError={!!errors.avatar}>
          <input
            type="text"
            placeholder="URL"
            {...register('avatar')}
            readOnly
          />
          <ErrorMessage $focus={isFocused.avatar}>
            {errors.avatar?.message}
          </ErrorMessage>

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
              isFocused={isFocused.name}
              hasError={!!errors.name}
            />
            <ErrorMessage $focus={isFocused.name}>
              {errors.name?.message}
            </ErrorMessage>
          </LabelInput>
          <LabelInput>
            <InputStyled
              type="email"
              placeholder="Email"
              {...register('email')}
              onBlur={() => handleBlur('email')}
              onFocus={() => handleFocus('email')}
              isFocused={isFocused.email}
              hasError={!!errors.email}
            />
            <ErrorMessage $focus={isFocused.email}>
              {errors.email?.message}
            </ErrorMessage>
          </LabelInput>
          <LabelInput>
            <InputStyled
              type="text"
              placeholder="Phone"
              {...register('phone')}
              autoComplete="tel"
              onBlur={() => handleBlur('phone')}
              onFocus={() => handleFocus('phone')}
              isFocused={isFocused.phone}
              hasError={!!errors.phone}
            />
            <ErrorMessage $focus={isFocused.phone}>
              {errors.phone?.message}
            </ErrorMessage>
          </LabelInput>
        </WrapperInputsBlok>
        <SubmitButton type="submit">Save</SubmitButton>
      </EditForm>
    </ModalEditUserContainer>
  );
};
