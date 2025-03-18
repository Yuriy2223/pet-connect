import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  padding: 10px 20px;
  cursor: pointer;
`;

export const ThemedButton = () => {
  return <Button>Натисни мене</Button>;
};
