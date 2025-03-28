import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addPetSchema } from '../../components/Common/ValidationSchemas';
import { ErrorMessage } from './ErrorMessage';
import { uploadImage } from '../../utils/uploadImages';
import { useAppDispatch } from '../../redux/store';
import { addUserPet, fetchFullUserInfo } from '../../redux/user/operations';
import { selectNoticeSpecies } from '../../redux/notices/selectors';
import {
  AddButtonWrapper,
  AddPhoto,
  AddPhotoDefolt,
  AddPhotoWrapper,
  AddRadioWrapper,
  AddWrapperForm,
  IconFemale,
  ButtonBack,
  ButtonSubmit,
  IconMale,
  IconPhoto,
  IconUnknown,
  IconUploadPhoto,
  RadioButtonInput,
  RadioLabelFemale,
  RadioLabelMale,
  RadioLabelUnknown,
  TitleAdPet,
  UploadButton,
  UploadInput,
  UploadWrapper,
  InputContainer,
  AddSelectType,
  WrapperDateType,
  InputValue,
  InputDate,
  InputWrapper,
  AddSelectTypeWrapper,
} from './AddPetForm.styled';

interface PetFormData {
  title: string;
  name: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

export const AddPetForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    watch,
    clearErrors,
    setError,
    setValue,
  } = useForm<PetFormData>({
    resolver: yupResolver(addPetSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const species = useSelector(selectNoticeSpecies);
  const imgURLValue = watch('imgURL');
  const [filters, setFilters] = useState({
    sex: null as string | null,
    species: null as string | null,
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFilterChange = (field: string, value: string | null) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    if (field === 'sex' && value) {
      setValue('sex', value || '');
      clearErrors('sex');
    }
  };
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const uploadedUrl = await uploadImage(file);
    if (uploadedUrl) {
      setUploadedImage(uploadedUrl);
      setValue('imgURL', uploadedUrl);
    }
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleBlur = (field: keyof PetFormData) => {
    trigger(field);
  };

  const handleFocus = (field: keyof PetFormData) => {
    clearErrors(field);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setValue('birthday', date);
  };

  const handleSpeciesChange = (selected: string | null) => {
    setFilters(prev => ({ ...prev, species: selected }));
    setValue('species', selected || '');
    clearErrors('species');
  };

  const onSubmit = async (data: PetFormData) => {
    if (!data.sex) {
      setError('sex', { message: 'Please select a gender' });
      return;
    }

    if (!uploadedImage) {
      setError('imgURL', { message: 'Please upload an image' });
      return;
    }

    try {
      await dispatch(addUserPet({ ...data }));
      dispatch(fetchFullUserInfo());
      toast.success('Pet added successfully!');
      reset();
      clearErrors();

      setUploadedImage(null);
      setFilters({ sex: null, species: null });

      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      toast.error(errorMessage);
    }
  };

  return (
    <AddWrapperForm onSubmit={handleSubmit(onSubmit)}>
      <TitleAdPet>
        Add my pet / <span>Personal details</span>
      </TitleAdPet>

      <AddRadioWrapper>
        <RadioLabelFemale $isActive={filters.sex === 'female'}>
          <RadioButtonInput
            type="radio"
            {...register('sex')}
            value="female"
            checked={filters.sex === 'female'}
            onChange={() => handleFilterChange('sex', 'female')}
          />
          <IconFemale iconName="female" $isActive={filters.sex === 'female'} />
        </RadioLabelFemale>

        <RadioLabelMale $isActive={filters.sex === 'male'}>
          <RadioButtonInput
            type="radio"
            {...register('sex')}
            value="male"
            checked={filters.sex === 'male'}
            onChange={() => handleFilterChange('sex', 'male')}
          />
          <IconMale iconName="male" $isActive={filters.sex === 'male'} />
        </RadioLabelMale>

        <RadioLabelUnknown $isActive={filters.sex === 'unknown'}>
          <RadioButtonInput
            type="radio"
            {...register('sex')}
            value="unknown"
            checked={filters.sex === 'unknown'}
            onChange={() => handleFilterChange('sex', 'unknown')}
          />
          <IconUnknown
            iconName="unknown"
            $isActive={filters.sex === 'unknown'}
          />
        </RadioLabelUnknown>
        <ErrorMessage message={errors.sex?.message} />
      </AddRadioWrapper>

      <AddPhotoWrapper>
        {uploadedImage ? (
          <AddPhoto src={uploadedImage} alt="Uploaded pet" />
        ) : (
          <AddPhotoDefolt>
            <IconPhoto iconName="footprint" />
          </AddPhotoDefolt>
        )}
        <UploadWrapper>
          <UploadInput
            type="text"
            placeholder="URL"
            {...register('imgURL')}
            readOnly
          />
          <ErrorMessage message={errors.imgURL?.message} />
          <UploadButton htmlFor="file-upload">
            Upload photo
            <IconUploadPhoto iconName="upload-cloud" />
          </UploadButton>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            hidden
            onChange={event => {
              handleFileUpload(event);
              if (event.target.files?.length || imgURLValue) {
                clearErrors('imgURL');
              }
            }}
          />
        </UploadWrapper>
      </AddPhotoWrapper>
      <InputContainer>
        <InputWrapper>
          <InputValue
            type="text"
            placeholder="Title"
            {...register('title')}
            onBlur={() => handleBlur('title')}
            onFocus={() => handleFocus('title')}
            $isError={!!errors.title}
          />
          <ErrorMessage message={errors.title?.message} />
        </InputWrapper>
        <InputWrapper>
          <InputValue
            type="text"
            placeholder="Pet’s Name"
            {...register('name')}
            onBlur={() => handleBlur('name')}
            onFocus={() => handleFocus('name')}
            $isError={!!errors.name}
          />
          <ErrorMessage message={errors.name?.message} />
        </InputWrapper>
        <WrapperDateType>
          <InputWrapper>
            <InputDate
              type="date"
              placeholder="DD.MM.YYYY"
              {...register('birthday')}
              onChange={handleDateChange}
              onBlur={() => handleBlur('birthday')}
              onFocus={() => handleFocus('birthday')}
              $isError={!!errors.birthday}
            />
            <ErrorMessage message={errors.birthday?.message} />
          </InputWrapper>
          <AddSelectTypeWrapper>
            <AddSelectType
              options={species.map(s => ({ value: s, label: s }))}
              placeholder="By type"
              {...register('species')}
              value={
                filters.species
                  ? { value: filters.species, label: filters.species }
                  : null
              }
              onChange={selected =>
                handleSpeciesChange(selected?.value || null)
              }
              onBlur={() => handleBlur('species')}
              onFocus={() => handleFocus('species')}
              isError={!!errors.species}
            />
            <ErrorMessage message={errors.species?.message} />
          </AddSelectTypeWrapper>
        </WrapperDateType>
      </InputContainer>

      <AddButtonWrapper>
        <ButtonBack type="button" onClick={handleBack}>
          Back
        </ButtonBack>
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </AddButtonWrapper>
    </AddWrapperForm>
  );
};
