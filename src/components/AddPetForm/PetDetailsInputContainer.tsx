import React from 'react';
import {
  InputContainer,
  InputWrapper,
  InputValue,
  WrapperDateType,
  InputDate,
  AddSelectTypeWrapper,
  AddSelectType,
} from './AddPetForm.styled';
import { ErrorMessage } from './ErrorMessage';
import { OptionType } from '../../services/apiService';

interface PetDetailsInputContainerProps {
  register: any;
  errors: Record<string, any>;
  typeOptions: OptionType[];
  filters: { type: OptionType | null };
  onBlur: (field: keyof PetFormData) => void;
  onFocus: (field: keyof PetFormData) => void;
  onFilterChange: (field: string, value: string | null) => void;
}

export const PetDetailsInputContainer: React.FC<PetDetailsInputContainerProps> = ({
  register,
  errors,
  typeOptions,
  filters,
  onBlur,
  onFocus,
  onFilterChange,
}) => {
  return (
    <InputContainer>
      <InputWrapper>
        <InputValue
          type="text"
          placeholder="Title"
          {...register('title')}
          onBlur={() => onBlur('title')}
          onFocus={() => onFocus('title')}
        />
        <ErrorMessage message={errors.title?.message} />
      </InputWrapper>
      <InputWrapper>
        <InputValue
          type="text"
          placeholder="Pet’s Name"
          {...register('name')}
          onBlur={() => onBlur('name')}
          onFocus={() => onFocus('name')}
        />
        <ErrorMessage message={errors.name?.message} />
      </InputWrapper>
      <WrapperDateType>
        <InputWrapper>
          <InputDate
            type="date"
            placeholder="DD.MM.YYYY"
            {...register('birthday')}
            onBlur={() => onBlur('birthday')}
            onFocus={() => onFocus('birthday')}
          />
          <ErrorMessage message={errors.birthday?.message} />
        </InputWrapper>
        <AddSelectTypeWrapper>
          <AddSelectType
            options={typeOptions}
            placeholder="By type"
            {...register('species')}
            value={filters.type}
            onChange={(option) =>
              onFilterChange('type', (option as OptionType | null)?.value || null)
            }
            onBlur={() => onBlur('species')}
            onFocus={() => onFocus('species')}
          />
          <ErrorMessage message={errors.species?.message} />
        </AddSelectTypeWrapper>
      </WrapperDateType>
    </InputContainer>
  );
};
