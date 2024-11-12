import React from 'react';
import {
  AddRadioWrapper,
  RadioButtonInput,
  RadioLabelFemale,
  RadioLabelMale,
  RadioLabelUnknown,
  IconFemale,
  IconMale,
  IconUnknown,
} from './AddPetForm.styled';
import { ErrorMessage } from './ErrorMessage';

interface GenderRadioButtonsProps {
  selectedGender: string | null;
  onGenderChange: (field: string, value: string | null) => void;
  errorMessage: string | null;
}

export const GenderRadioButtons: React.FC<GenderRadioButtonsProps> = ({
  selectedGender,
  onGenderChange,
  errorMessage,
}) => {
  return (
    <AddRadioWrapper>
      <RadioLabelFemale $isActive={selectedGender === 'female'}>
        <RadioButtonInput
          type="radio"
          value="female"
          checked={selectedGender === 'female'}
          onChange={() => onGenderChange('sex', 'female')}
        />
        <IconFemale iconName="female" $isActive={selectedGender === 'female'} />
      </RadioLabelFemale>

      <RadioLabelMale $isActive={selectedGender === 'male'}>
        <RadioButtonInput
          type="radio"
          value="male"
          checked={selectedGender === 'male'}
          onChange={() => onGenderChange('sex', 'male')}
        />
        <IconMale iconName="male" $isActive={selectedGender === 'male'} />
      </RadioLabelMale>

      <RadioLabelUnknown $isActive={selectedGender === 'unknown'}>
        <RadioButtonInput
          type="radio"
          value="unknown"
          checked={selectedGender === 'unknown'}
          onChange={() => onGenderChange('sex', 'unknown')}
        />
        <IconUnknown
          iconName="unknown"
          $isActive={selectedGender === 'unknown'}
        />
      </RadioLabelUnknown>
      <ErrorMessage message={errorMessage} />
    </AddRadioWrapper>
  );
};

{
  /* <AddRadioWrapper>
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
      </AddRadioWrapper> */
}
