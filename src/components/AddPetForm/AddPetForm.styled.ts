import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const AddWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; /** */
  height: 100%; /** */

  border: 1px solid red; /** */
`;
export const TitleAdPet = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};
  margin-bottom: 24px;

  span {
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.opacityTr};
  }
`;
export const AddRadioWrapper = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RadioLabelFemale = styled.label<{ $isActive: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.red : theme.redLight};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.red};
  }
`;
export const IconFemale = styled(Iconsvg)<{ $isActive: boolean }>`
  width: 26px;
  height: 26px;
  stroke: ${({ theme, $isActive }) => ($isActive ? theme.white : theme.blue)};
  transition: all 300ms ease;

  ${RadioLabelFemale}:hover & {
    stroke: ${({ theme }) => theme.white};
  }
`;
export const RadioLabelMale = styled.label<{ $isActive: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.blue : theme.blueLight};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export const IconMale = styled(Iconsvg)<{ $isActive: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ theme, $isActive }) => ($isActive ? theme.white : theme.red)};
  transition: all 300ms ease;

  ${RadioLabelMale}:hover & {
    stroke: ${({ theme }) => theme.white};
  }
`;
export const RadioLabelUnknown = styled.label<{ $isActive: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.primaryDark : theme.lightYellow};
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;
export const IconUnknown = styled(Iconsvg)<{ $isActive: boolean }>`
  width: 32px;
  height: 32px;
  fill: ${({ theme, $isActive }) =>
    $isActive ? theme.white : theme.primaryDark};
  transition: all 300ms ease;

  ${RadioLabelUnknown}:hover & {
    fill: ${({ theme }) => theme.white};
  }
`;
export const RadioButtonInput = styled.input`
  display: none;
`;
////////////////////////////////////////////////////
export const AddPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  margin-top: 8px;
  margin-bottom: 10px;
`;
export const AddPhoto = styled.img`
  border-radius: 100px;
  width: 68px;
  height: 68px;
  object-fit: cover;
  margin: 0 auto 16px;
`;
export const AddPhotoDefolt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 68px;
  height: 68px;
  background: ${({ theme }) => theme.lightYellow};
  margin: 0 auto 16px;
`;
export const IconPhoto = styled(Iconsvg)`
  width: 34px;
  height: 34px;
  fill: ${({ theme }) => theme.primaryDark};
`;
export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UploadInput = styled.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 9px 20px 9px 10px;
  width: 170px;
  height: 36px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
`;
export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 10px;
  width: 117px;
  height: 36px;
  background: #fff4df;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;
export const IconUploadPhoto = styled(Iconsvg)`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.primaryDark};
`;
//////////////////// контейнер інпутів /////////////////////////////////
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

///////////////////// кнопкии ////////////////////////////////
export const AddButtonWrapper = styled.div``;

export const ButtonBack = styled.button`
  &:hover {
  }
`;
export const ButtonSubmit = styled.button`
  &:hover {
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
/////////////////////////////////////////////////////