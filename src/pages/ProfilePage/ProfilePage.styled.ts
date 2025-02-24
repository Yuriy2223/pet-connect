import styled from 'styled-components';
import { Container } from '../../components/Common/Container';

export const ProfilePageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;
