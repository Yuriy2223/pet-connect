import React from 'react';
import {
  UploadWrapper,
  UploadInput,
  UploadButton,
  IconUploadPhoto,
} from './AddPetForm.styled';
import { ErrorMessage } from './ErrorMessage';

interface ImageUploadProps {
  uploadedImage: string | null;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string | null;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  uploadedImage,
  onImageUpload,
  errorMessage,
}) => {
  return (
    <UploadWrapper>
      <UploadInput
        type="text"
        placeholder="URL"
        value={uploadedImage || ''}
        readOnly
      />
      <ErrorMessage message={errorMessage} />
      <UploadButton as="label" htmlFor="file-upload">
        Upload photo
        <IconUploadPhoto iconName="upload-cloud" />
      </UploadButton>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onImageUpload}
      />
    </UploadWrapper>
  );
};
