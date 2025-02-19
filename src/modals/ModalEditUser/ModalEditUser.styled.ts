import styled from 'styled-components';

export const ModalEditUserContainer = styled.div`
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
  }
`;
