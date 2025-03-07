import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { fetchTypes, OptionType } from '../../services/apiService';
import { addPetSchema } from '../../components/Common/ValidationSchemas';
import { ErrorMessage } from './ErrorMessage';
import { uploadImage } from '../../utils/uploadImages';
import { useAppDispatch } from '../../redux/store';
import { addUserPet, fetchFullUserInfo } from '../../redux/user/operations';
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
    clearErrors,
    setError,
    setValue,
  } = useForm<PetFormData>({
    resolver: yupResolver(addPetSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
  const [filters, setFilters] = useState({
    sex: null as string | null,
    type: null as OptionType | null,
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

  useEffect(() => {
    const fetchData = async () => {
      const types = await fetchTypes();
      setTypeOptions(types);
    };
    fetchData();
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setValue('birthday', date);
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
      setFilters({ sex: null, type: null });

      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error: unknown) {
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
            onChange={handleFileUpload}
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
            />
            <ErrorMessage message={errors.birthday?.message} />
          </InputWrapper>
          <AddSelectTypeWrapper>
            <AddSelectType
              options={typeOptions}
              placeholder="By type"
              {...register('species')}
              value={
                typeOptions.find(
                  option => option.value === filters.type?.value
                ) || null
              }
              onChange={option => {
                const selectedOption = option as OptionType | null;
                setFilters(prev => ({ ...prev, type: selectedOption }));
                setValue('species', selectedOption?.value || '');
                clearErrors('species');
              }}
              onBlur={() => handleBlur('species')}
              onFocus={() => handleFocus('species')}
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
