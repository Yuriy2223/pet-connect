import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  fetchUserCurrent,
  updateUserProfile,
} from '../../redux/user/operations';
import { useAppDispatch } from '../../redux/store';
import { selectUserProfile } from '../../redux/user/selectors';
import { ModalEditUserContainer } from './ModalEditUser.styled';
import {
  IconPhoto,
  IconUploadPhoto,
} from '../../components/AddPetForm/AddPetForm.styled';

const editUserSchema = yup.object().shape({
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

interface EditUser {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

export const ModalEditUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useSelector(selectUserProfile);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // trigger,
    // reset,
    clearErrors,
    // setError,
    setValue,
  } = useForm<EditUser>({
    resolver: yupResolver<EditUser>(editUserSchema),
    defaultValues: {
      name: userProfile?.name || '',
      email: userProfile?.email || '',
      avatar: userProfile?.avatar || '',
      phone: userProfile?.phone || '',
    },
  });

  useEffect(() => {
    if (!userProfile) {
      dispatch(fetchUserCurrent());
    }
  }, [dispatch, userProfile]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Only image files are allowed.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
      setValue('avatar', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleBlur = (field: keyof EditUser) => {
    clearErrors(field);
  };
  const handleFocus = (field: keyof EditUser) => {
    clearErrors(field);
  };
  const onSubmit = async (data: EditUser) => {
    try {
      await dispatch(updateUserProfile(data)).unwrap();
      toast.success('Profile updated successfully!');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <ModalEditUserContainer>
      <h2>Edit information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded user photo" />
          ) : (
            <div>
              <IconPhoto iconName="user" />
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="URL"
            value={uploadedImage || ''}
            readOnly
            hidden
          />
          <p>{errors.avatar?.message}</p>
          <label htmlFor="file-upload">
            Upload photo
            <IconUploadPhoto iconName="upload-cloud" />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>

        <div>
          <label>
            <input
              type="text"
              placeholder="Name"
              {...register('name')}
              onBlur={() => handleBlur('name')}
              onFocus={() => handleFocus('name')}
            />
            <p>{errors.name?.message}</p>
          </label>
          <label>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              onBlur={() => handleBlur('email')}
              onFocus={() => handleFocus('email')}
            />
            <p>{errors.email?.message}</p>
          </label>
          <label>
            <input
              type="text"
              placeholder="Phone"
              {...register('phone')}
              onBlur={() => handleBlur('phone')}
              onFocus={() => handleFocus('phone')}
            />
            <p>{errors.phone?.message}</p>
          </label>
        </div>
        <div>
          <button type="submit">Go to profile</button>
        </div>
      </form>
    </ModalEditUserContainer>
  );
};

// useEffect(() => {
//   if (userProfile) {
//     reset({
//       name: userProfile.name,
//       email: userProfile.email,
//       avatar: userProfile.avatar || '',
//       phone: userProfile.phone || '',
//     });
//     setUploadedImage(userProfile.avatar || null);
//   }
// }, [userProfile, reset]);

// const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const file = event.target.files?.[0];
//   if (file) {
//     const imageUrl = URL.createObjectURL(file);
//     setUploadedImage(imageUrl);
//     setValue('avatar', imageUrl);
//   }
// };

// // Selector to get the user profile
// export const selectUserProfile = (state: RootState): UserProfile | null =>
//   state.user.profile;
