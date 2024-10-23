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
    // trigger,
    // handleSubmit,
    reset,
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
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleBack = () => {
    navigate('/profile');
  };

  useEffect(() => {
    const fetchData = async () => {
      const types = await fetchTypes();
      setTypeOptions(types);
    };
    fetchData();
  }, []);

  const onSubmit = async (data: PetFormData) => {
    try {
      const updatedData = { ...data, imgUrl: uploadedImage };
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
        <InputValue type="text" placeholder="Title" {...register('title')} />
        <ErrorMessage message={errors.title?.message} />

        <InputValue
          type="text"
          placeholder="Pet’s Name"
          {...register('name')}
        />
        <ErrorMessage message={errors.name?.message} />

        <WrapperDateType>
          <InputDate
            type="date"
            placeholder="00.00.0000"
            {...register('birthday')}
          />
          <ErrorMessage message={errors.birthday?.message} />

          <AddSelectType
            options={typeOptions}
            placeholder="By type"
            {...register('species')}
            value={filters.type}
            onChange={option =>
              handleFilterChange(
                'type',
                (option as OptionType | null)?.value || null
              )
            }
          />
          <ErrorMessage message={errors.species?.message} />
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

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { fetchTypes, OptionType } from '../../services/apiService';
// import { addPetSchema } from '../../components/Common/ValidationSchemas';
// import {
//   AddButtonWrapper,
//   AddPhoto,
//   AddPhotoDefolt,
//   AddPhotoWrapper,
//   AddRadioWrapper,
//   AddWrapperForm,
//   IconFemale,
//   ButtonBack,
//   ButtonSubmit,
//   IconMale,
//   IconPhoto,
//   IconUnknown,
//   IconUploadPhoto,
//   RadioButtonInput,
//   RadioLabelFemale,
//   RadioLabelMale,
//   RadioLabelUnknown,
//   TitleAdPet,
//   UploadButton,
//   UploadInput,
//   UploadWrapper,
//   InputContainer,
//   InputTitle,
//   InputName,
//   InputDate,
//   AddSelectType,
//   WrapperDateType,
// } from './AddPetForm.styled';

// interface PetFormData {
//   title: string;
//   name: string;
//   imgUrl: string;
//   species: string;
//   birthday: string;
//   sex: string;
// }

// export const AddPetForm: React.FC = () => {
//   const {
//     // register,
//     handleSubmit,
//     // formState: { errors },
//     // trigger,
//     // reset,
//     // clearErrors,
//   } = useForm<PetFormData>({
//     resolver: yupResolver(addPetSchema),
//   });
//   const navigate = useNavigate();
//   const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
//   const [filters, setFilters] = useState({
//     sex: null as string | null,
//     type: null as OptionType | null,
//   });

//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//   const handleFilterChange = (field: string, value: string | null) => {
//     setFilters(prev => ({ ...prev, [field]: value }));
//   };

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUploadedImage(imageUrl);
//     }
//   };

//   const handleBack = () => {
//     navigate('/profile');
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const types = await fetchTypes();

//       setTypeOptions(types);
//     };
//     fetchData();
//   }, []);

//   const onSubmit = async (data: PetFormData) => {
//     try {
//       const response = await fetch('/api/add-pet', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add pet. Try again.');
//       }

//       toast.success('Pet added successfully!');

//       setTimeout(() => {
//         navigate('/profile');
//       }, 2000);
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         toast.error(error.message || 'An error occurred. Please try again.');
//       } else {
//         toast.error('An unknown error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <AddWrapperForm onSubmit={handleSubmit(onSubmit)}>
//       <TitleAdPet>
//         Add my pet / <span>Personal details</span>
//       </TitleAdPet>
//       <AddRadioWrapper>
//         <RadioLabelFemale $isActive={filters.sex === 'female'}>
//           <RadioButtonInput
//             type="radio"
//             name="sex"
//             value="female"
//             checked={filters.sex === 'female'}
//             onChange={() => handleFilterChange('sex', 'female')}
//           />
//           <IconFemale iconName="female" $isActive={filters.sex === 'female'} />
//         </RadioLabelFemale>

//         <RadioLabelMale $isActive={filters.sex === 'male'}>
//           <RadioButtonInput
//             type="radio"
//             name="sex"
//             value="male"
//             checked={filters.sex === 'male'}
//             onChange={() => handleFilterChange('sex', 'male')}
//           />
//           <IconMale iconName="male" $isActive={filters.sex === 'male'} />
//         </RadioLabelMale>

//         <RadioLabelUnknown $isActive={filters.sex === 'unknown'}>
//           <RadioButtonInput
//             type="radio"
//             name="sex"
//             value="unknown"
//             checked={filters.sex === 'unknown'}
//             onChange={() => handleFilterChange('sex', 'unknown')}
//           />
//           <IconUnknown
//             iconName="unknown"
//             $isActive={filters.sex === 'unknown'}
//           />
//         </RadioLabelUnknown>
//       </AddRadioWrapper>
//       <AddPhotoWrapper>
//         {uploadedImage ? (
//           <AddPhoto src={uploadedImage} alt="Uploaded pet" />
//         ) : (
//           <AddPhotoDefolt>
//             <IconPhoto iconName="footprint" />
//           </AddPhotoDefolt>
//         )}

//         <UploadWrapper>
//           <UploadInput
//             type="text"
//             placeholder="URL"
//             value={uploadedImage || ''}
//             readOnly
//           />
//           <UploadButton as="label" htmlFor="file-upload">
//             Upload photo
//             <IconUploadPhoto iconName="upload-cloud" />
//           </UploadButton>
//           <input
//             id="file-upload"
//             type="file"
//             accept="image/*"
//             style={{ display: 'none' }}
//             onChange={handleImageUpload}
//           />
//         </UploadWrapper>
//       </AddPhotoWrapper>

//       <InputContainer>
//         <InputTitle type="text" placeholder="Title" />
//         <InputName type="text" placeholder="Pet’s Name" />
//         <WrapperDateType >
//           <InputDate type="date" placeholder="00.00.0000" />
//           <AddSelectType
//             options={typeOptions}
//             placeholder="By type"
//             value={filters.type}
//             onChange={option =>
//               handleFilterChange(
//                 'type',
//                 (option as OptionType | null)?.value || null
//               )
//             }
//           />
//         </WrapperDateType>
//       </InputContainer>

//       <AddButtonWrapper>
//         <ButtonBack type="button" onClick={handleBack}>
//           Back
//         </ButtonBack>
//         <ButtonSubmit type="submit">Submit</ButtonSubmit>
//       </AddButtonWrapper>
//     </AddWrapperForm>
//   );
// };
