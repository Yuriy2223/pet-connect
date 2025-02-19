import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';

export const ModalEditUserContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.black};
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.17;
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const IconPhoto = styled(Iconsvg)`
  width: 34px;
  height: 34px;
  fill: ${({ theme }) => theme.primaryDark};
`;
export const IconUploadPhoto = styled(Iconsvg)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.primaryDark};
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
export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 12px;
  width: 117px;
  height: 36px;
  background: ${({ theme }) => theme.lightYellow};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.black};
  border: none;
  cursor: pointer;

  @media (max-width: 374px) {
    width: 117px;
  }

  @media (min-width: 768px) {
    width: 146px;
    height: 42px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
`;
export const Button = styled.button`
  border-radius: 30px;
  width: 136px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryLight};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

  &:disabled {
    background: #ccc;
  }
`;
