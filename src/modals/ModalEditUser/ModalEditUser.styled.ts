import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';

export const ModalEditUserContainer = styled.div`
  width: 100%;
  padding: 50px 20px 40px;
  border-radius: 30px;
  background: ${({ theme }) => theme.white};
  display: flex;
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
    padding: 50px 50px 40px;
  }
`;
export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const UploadWrapperAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }

  div {
    border: 2px solid ${({ theme }) => theme.primaryDark};
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
`;
export const IconAvatar = styled(Iconsvg)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.primaryDark};
`;
export const UploadWrapperInputEndBtn = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  margin-bottom: 18px;

  input {
    width: 160px;
    padding: 12px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid
      ${({ theme, $hasError }) => ($hasError ? theme.red : theme.primaryDark)};

    @media (min-width: 768px) {
      width: 220px;
    }
  }
`;
export const UploadButtonAvatar = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 8px;
  width: 126px;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 374px) {
    width: 117px;
  }

  @media (min-width: 768px) {
    width: 146px;
    padding: 16px;
  }
`;
export const IconUploadBtnAvatar = styled(Iconsvg)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.primaryDark};
`;
export const WrapperInputsBlok = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const LabelInput = styled.label`
  position: relative;
`;
export const InputStyled = styled.input.withConfig({
  shouldForwardProp: prop => !['hasError', 'isFocused'].includes(prop),
})<{
  hasError?: boolean;
  isFocused?: boolean;
}>`
  width: 100%;
  border: 1px solid
    ${({ theme, hasError, isFocused }) =>
      isFocused ? theme.primaryDark : hasError ? theme.red : theme.primaryDark};
  border-radius: 30px;
  padding: 12px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};

  &:hover,
  &:focus {
    border-color: ${({ theme, hasError, isFocused }) =>
      isFocused ? theme.green : hasError ? theme.red : theme.green};
  }
`;
export const ErrorMessage = styled.p<{
  $focus?: boolean;
}>`
  color: ${({ theme }) => theme.red};
  font-weight: 500;
  font-size: 10px;
  position: absolute;
  bottom: -15px;
  left: 10px;
  opacity: ${({ $focus }) => ($focus ? 0 : 1)};
  transition: opacity 300ms ease;
`;
export const SubmitButton = styled.button`
  border-radius: 30px;
  width: 80%;
  margin: 0 auto;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 768px) {
    width: 75%;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
