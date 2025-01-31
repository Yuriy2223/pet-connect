import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ModalUniversal } from '../UniversalModal';
import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
import { logoutUser } from '../../redux/auth/operations';
import { AppDispatch } from '../../redux/store';
import {
  ModalButton,
  ModalFormLogaut,
  ModalImage,
  ModalImageWrapper,
  ModalTitle,
} from './ApproveActionModal.styled';

interface ModalLogoutProps {
  onClose: () => void;
  onLogout: () => void;
}

export const ApproveActionModal: React.FC<ModalLogoutProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  // Відправка запиту на backend і обробка помилок
  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch('users/signout', { method: 'POST' });

      if (!response.ok) {
        throw new Error('Logout failed on backend.');
      }

      toast.success('Sign out success!');
    } catch (error) {
      toast.error('Logout failed. Please try again.');
      console.error('Logout error:', error);
    } finally {
      // Викликаємо logout через Redux і очищаємо localStorage
      dispatch(logoutUser());

      // Переадресація на головну сторінку
      navigate('/home');
    }
  }, [dispatch, navigate]);

  return (
    <ModalUniversal onClose={onClose}>
      <ModalFormLogaut>
        <ModalImageWrapper>
          <ModalImage src={alreadyImg} alt="Cat icon" />
        </ModalImageWrapper>
        <ModalTitle>Already leaving?</ModalTitle>

        <ModalButton type="button" onClick={handleLogout}>
          Yes
        </ModalButton>
        <ModalButton type="button" onClick={onClose}>
          Cancel
        </ModalButton>
      </ModalFormLogaut>
    </ModalUniversal>
  );
};
