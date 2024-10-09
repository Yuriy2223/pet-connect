// import React from 'react';
// import styled from 'styled-components';

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
// }

// const StyledButton = styled.button`
//   padding: 6px 12px;
//   font-size: 16px;
//   font-weight: 500;
//   border: none;
//   border-radius: 5px;
// `;

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   onClick,
//   className,
// }) => {
//   return (
//     <StyledButton className={className} onClick={onClick}>
//       {children}
//     </StyledButton>
//   );
// };
import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary'; // Додано варіанти стилів
  disabled?: boolean; // Додано можливість вимкнути кнопку
}

// Спільні стилі для кнопки
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
 
  border-radius: 8px;
  
  border: none;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }



`;

// Стилі для primary та secondary варіантів кнопки
const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles}
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: #fff;
          color: #54adff;
          border: 2px solid #54adff;

          &:hover {
            background-color: #f0f8ff;
          }

          &:active {
            background-color: #e0f0ff;
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: #54adff;
          color: #ffffff;

          &:hover {
            background-color: #409ed7;
          }

          &:active {
            background-color: #3180aa;
          }
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary', // Значення за замовчуванням - 'primary'
  disabled = false,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
