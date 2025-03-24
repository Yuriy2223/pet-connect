import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';
import { FocusedProps } from './ModalEditUser';

export const ErrorText = styled.p.withConfig({
  shouldForwardProp: prop => !['isValid', 'isFieldFocused'].includes(prop),
})<FocusedProps & { isValid?: boolean }>`
  color: ${props => (props.isValid ? props.theme.green : props.theme.red)};
  font-weight: 500;
  font-size: 10px;
  position: absolute;
  bottom: -15px;
  left: 10px;
  opacity: ${props => (props.isFieldFocused ? 0 : 1)};
  transition: opacity 300ms ease;
`;

export const ModalEditUserContainer = styled.div`
  padding: 50px 20px 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 30px;
  width: 335px;
  height: 473px;

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
export const EditFormWraper = styled.form`
  display: flex;
  flex-direction: column;
  width: 295px;

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    width: 424px;
    height: 506px;
  }
  @media (min-width: 1280px) {
    width: 424px;
    height: 516px;
  }
`;

export const UploadWrapperAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;

  img {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  div {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;
export const IconAvatar = styled(Iconsvg)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.primaryDark};
`;
export const UploadWrapperInputEndBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 295px;
  height: 42px;
  margin-bottom: 10px;

  input {
    padding: 8px;
    margin: 5px 0;
    border-radius: 4px;
    border: 1px solid #f6b83d;
    border-radius: 30px;
    padding: 12px;
    width: 160px;
  }
`;
export const IconUploadBtnAvatar = styled(Iconsvg)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.primaryDark};
`;
export const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px;
  height: 42px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.03em;
  color: #262626;
`;

export const WrapperInputsBlok = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  gap: 20px;
  margin-bottom: 20px;
`;

export const LabelInput = styled.label`
  position: relative;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
export const UploadButtonAvatar = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 12px;
  width: 126px;
  height: 100%;
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
  width: 100%;
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

  /* @media (min-width: 768px) {
    width: 200px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  } */

  &:disabled {
    background: #ccc;
  }
`;
