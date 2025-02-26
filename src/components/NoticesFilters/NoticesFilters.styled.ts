// import styled from 'styled-components';
// import { StyledSelect } from '../Common/StyledSelect';
// import { Iconsvg } from '../Common/Icons';

// export const FiltersContainer = styled.div`
//   border-radius: 30px;
//   width: 335px;
//   background-color: ${({ theme }) => theme.lightYellow};
//   padding: 20px;

//   @media (max-width: 374px) {
//     padding: 10px;
//     width: 100%;
//   }
//   @media (min-width: 768px) {
//     width: 704px;
//     padding: 40px 32px;
//   }
//   @media (min-width: 1280px) {
//     width: 1216px;
//     padding: 40px;
//   }
// `;
// export const FilterRow = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   row-gap: 12px;
//   column-gap: 10px;
//   padding-bottom: 20px;

//   @media (min-width: 768px) {
//     column-gap: 16px;
//     padding-bottom: 16px;
//   }
//   @media (min-width: 1280px) {
//   }
// `;
// export const SelectCategory = styled(StyledSelect)`
//   width: 140px;

//   @media (min-width: 768px) {
//     width: 170px;
//   }
//   @media (min-width: 1280px) {
//     width: 200px;
//   }
// `;
// export const SelectGender = styled(StyledSelect)`
//   width: 140px;

//   @media (min-width: 768px) {
//     width: 170px;
//   }
//   @media (min-width: 1280px) {
//     width: 190px;
//   }
// `;
// export const SelectType = styled(StyledSelect)`
//   width: 100%;

//   @media (min-width: 768px) {
//     width: 190px;
//   }
// `;
// export const RadioGroup = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   padding-top: 20px;
//   border-top: 1px solid ${({ theme }) => theme.opacity};
//   position: relative;
// `;
// export const RadioButtonLabel = styled.label<{ $isActive: boolean }>`
//   display: inline-block;
//   padding: 10px 16px;
//   border-radius: 30px;
//   background-color: ${({ $isActive, theme }) =>
//     $isActive ? theme.primaryDark : theme.white};
//   color: ${({ $isActive, theme }) =>
//     $isActive ? theme.white : theme.opacityTr};
//   border: 1px solid
//     ${({ $isActive, theme }) => ($isActive ? theme.primaryDark : theme.opacity)};
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   &:hover {
//     background-color: ${({ theme }) => theme.primaryDark};
//     color: ${({ theme }) => theme.white};
//     border-color: ${({ theme }) => theme.primaryDark};
//   }

//   @media (min-width: 768px) {
//     width: 104px;
//     height: 46px;
//     padding: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
// export const RadioButtonInput = styled.input`
//   display: none;
// `;
// export const ClearButtonRatio = styled.button<{ $isActive: boolean }>`
//   background: none;
//   border: none;
//   color: ${({ theme }) => theme.white};
//   font-size: 12px;
//   display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};

//   &:hover {
//     color: ${({ theme }) => theme.white};
//   }
// `;
// export const IconCloseRatio = styled(Iconsvg)`
//   stroke: ${({ theme }) => theme.white};
// `;
// export const ResetButton = styled.button`
//   background-color: ${({ theme }) => theme.primaryLight};
//   color: ${({ theme }) => theme.white};
//   padding: 8px 16px;
//   border: none;
//   border-radius: 10px;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   margin-top: 10px;
//   position: absolute;
//   bottom: 0;
//   right: 0;

//   &:hover {
//     background-color: ${({ theme }) => theme.primaryDark};
//   }
// `;
