export interface OptionType {
  value: string;
  label: string;
}

// Функція для отримання категорій з бекенду
export const fetchCategories = async (): Promise<OptionType[]> => {
  return [
    { value: 'show all', label: 'Show all' },
    { value: 'sell', label: 'Sell' },
    { value: 'free', label: 'Free' },
    { value: 'lost', label: 'Lost' },
    { value: 'found', label: 'Found' },
  ];
};

// Функція для отримання статей з бекенду
export const fetchGenders = async (): Promise<OptionType[]> => {
  return [
    { value: 'show all', label: 'Show all' },
    { value: 'unknown', label: 'Unknown' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'multiple', label: 'Multiple' },
  ];
};

// Функція для отримання типів улюбленців з бекенду
export const fetchTypes = async (): Promise<OptionType[]> => {
  return [
    { value: 'show all', label: 'Show all' },
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'monkey', label: 'Monkey' },
    { value: 'bird', label: 'Bird' },
    { value: 'snake', label: 'Snake' },
    { value: 'turtle', label: 'Turtle' },
    { value: 'lizard', label: 'Lizard' },
    { value: 'frog', label: 'Frog' },
    { value: 'fish', label: 'Fish' },
    { value: 'ants', label: 'Ants' },
    { value: 'bees', label: 'Bees' },
    { value: 'butterfly', label: 'Butterfly' },
    { value: 'spider', label: 'Spider' },
    { value: 'scorpion', label: 'Scorpion' },
  ];
};
