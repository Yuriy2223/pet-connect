export interface EditUser {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

export interface InputProps {
  isValid?: boolean;
}

export interface FocusedProps {
  isFieldFocused?: boolean;
}
