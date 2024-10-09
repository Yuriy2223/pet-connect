import { AppDispatch } from '../store';
import { setUserProfile, addPet, removePet } from './userSlice';

interface PetData {
  name: string;
  age: number;
  species: string;
}

export const fetchUserProfile = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('/api/user/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(setUserProfile(data));
    } else {
      console.error('Error fetching profile:', data.message);
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
  }
};

export const addNewPet = (petData: PetData) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('/api/user/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(petData),
    });

    if (response.ok) {
      const newPet = await response.json();
      dispatch(addPet(newPet));
    } else {
      console.error('Error adding pet:', response.statusText);
    }
  } catch (error) {
    console.error('Error adding pet:', error);
  }
};

export const deletePet = (petId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`/api/user/pets/${petId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      dispatch(removePet(petId));
    } else {
      console.error('Error deleting pet:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting pet:', error);
  }
};
