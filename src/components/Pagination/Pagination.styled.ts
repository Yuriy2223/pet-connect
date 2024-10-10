import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button<{
  $active?: string;
  disabled?: boolean;
}>`
  background-color: ${({ $active }) =>
    $active === 'true' ? '#f9a825' : '#fff'};
  color: ${({ $active, disabled }) =>
    disabled ? '#ccc' : $active === 'true' ? '#fff' : '#333'};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#fff' : '#f9a825')};
    color: #fff;
  }
`;

export const Arrow = styled.span<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 24px;
  color: ${({ disabled }) => (disabled ? '#ccc' : '#333')};

  &:hover {
    color: ${({ disabled }) => (disabled ? '#ccc' : '#f9a825')};
  }
`;
