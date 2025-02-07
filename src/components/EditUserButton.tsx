import styled from 'styled-components';

export const EditUserButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button onClick={onClick} type="button">
    ✏️
  </button>
);
