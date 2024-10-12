import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';
import { Link } from 'react-router-dom';

interface InputProps {
  isValid?: boolean;
}

interface FocusedProps {
  isFieldFocused?: boolean;
}

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
export const FormWrapper = styled.form`
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
export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.black};
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 54px;
    margin-bottom: 16px;
  }
`;
export const SubText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.black};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const InputWrapperPass = styled.div`
  width: 100%;
  position: relative;
`;
// export const Input = styled.input.attrs<InputProps>({
//   isValid: undefined,
// })<InputProps>`
export const Input = styled.input.withConfig({
  shouldForwardProp: prop => prop !== 'isValid',
})<InputProps>`
  width: 100%;
  padding: 12px 50px 12px 12px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.opacityTr};
  border: 1px solid
    ${({ theme, isValid }) =>
      isValid === undefined
        ? theme.opacity
        : isValid
        ? theme.green
        : theme.red};
  transition: all 300ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.primaryDark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primaryDark};
  }

  /* Відключення стандартної іконки очей у полі паролю */
  &[type='password']::-ms-reveal,
  &[type='password']::-ms-clear,
  &[type='password']::-webkit-credentials-auto-fill-button {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 16px 70px 16px 16px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const Icon = styled.div.attrs<FocusedProps>({
  //  видаляємо кастомні пропси з DOM
  isFieldFocused: undefined,
})<FocusedProps>`
  opacity: ${({ isFieldFocused }) => (isFieldFocused ? 0 : 1)};
  transition: opacity 300ms ease;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 16px;
  }
`;
export const RightIcon = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.green};

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
export const WrongIcon = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.red};

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
export const FaEyeSlashIcon = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
export const FaEyeIcon = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
export const ValidationIcon = styled.div.attrs<FocusedProps>({
  isFieldFocused: undefined,
})<FocusedProps>`
  opacity: ${({ isFieldFocused }) => (isFieldFocused ? 0 : 1)};
  transition: opacity 300ms ease;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 40px;
  }
`;
export const ShowPasswordIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (min-width: 768px) {
    right: 14px;
  }
`;
export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.primaryLight};
  border-radius: 30px;
  padding: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin-top: 24px;
  margin-bottom: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 16px;
  }
`;
export const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WrapperLinkRegister = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.opacityTr};
`;
export const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
