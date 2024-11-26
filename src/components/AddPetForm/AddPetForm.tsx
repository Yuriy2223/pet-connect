import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { fetchTypes, OptionType } from '../../services/apiService';
import { addPetSchema } from '../../components/Common/ValidationSchemas';
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
import { ErrorMessage } from './ErrorMessage';

interface PetFormData {
  title: string;
  name: string;
  imgUrl: string;
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
      setValue('sex', value || ''); // Синхронізація значення статі з формою
      clearErrors('sex'); // Очищення помилки
    }
  };

  // Додаємо uploadedImage у форму автоматично при зміні зображення
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setValue('imgUrl', imageUrl); // Встановлюємо значення imgUrl у форму
      clearErrors('imgUrl'); // Очищаємо помилку, коли завантажено зображення
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

  const [formattedDate, setFormattedDate] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setFormattedDate(new Date(date).toLocaleDateString('uk-UA')); // формат DD.MM.YYYY
    setValue('birthday', date); // зберігаємо в форматі YYYY-MM-DD
  };

  const onSubmit = async (data: PetFormData) => {
    console.log(data);
    if (!filters.sex) {
      setError('sex', { message: 'Please select a gender' });
      return;
    } else {
      setValue('sex', filters.sex);
      clearErrors('sex');
    }

    if (!uploadedImage) {
      setError('imgUrl', { message: 'Please upload an image' });
      return;
    } else {
      clearErrors('imgUrl');
    }

    try {
      const updatedData = { ...data, imgUrl: uploadedImage, sex: filters.sex };
      const response = await fetch('/api/add-pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to add pet. Try again.');
      }

      toast.success('Pet added successfully!');
      reset();
      setUploadedImage(null);
      setFilters({ sex: null, type: null });

      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || 'An error occurred. Please try again.');
      } else {
        toast.error('An unknown error occurred. Please try again.');
      }
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
            value={uploadedImage || ''}
            readOnly
          />
          <ErrorMessage message={errors.imgUrl?.message} />
          <UploadButton as="label" htmlFor="file-upload">
            Upload photo
            <IconUploadPhoto iconName="upload-cloud" />
          </UploadButton>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
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
              } // Пошук обраного об'єкта
              onChange={option => {
                const selectedOption = option as OptionType | null;
                setFilters(prev => ({ ...prev, type: selectedOption })); // Оновлення фільтру з об'єктом
                setValue('species', selectedOption?.value || ''); // Оновлення значення у формі
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
