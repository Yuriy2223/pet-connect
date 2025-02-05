import React, { useCallback } from 'react';
import styled from 'styled-components';
import { LogOutButtonProps } from '../Header/Header.types';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';

const LogOutBtnContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 178px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
`;

export const LogOutButton: React.FC<LogOutButtonProps> = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(
      openModal({ type: 'ModalApproveAction', props: { actionType: 'logout' } })
    );
  }, [dispatch]);

  return (
    <LogOutBtnContainer>
      <LogOutBtn onClick={handleLogoutClick}>Log Out</LogOutBtn>
    </LogOutBtnContainer>
  );
};

// import React from 'react';
// import styled from 'styled-components';
// import { LogOutButtonProps } from '../Header/Header.types';
// import { useDispatch } from 'react-redux';
// import { openModal } from '../../redux/modal/slice';
// // import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';

// const LogOutBtnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const LogOutBtn = styled.button`
//   border: 1px solid ${({ theme }) => theme.whiteOpacity};
//   border-radius: 30px;
//   width: 178px;
//   height: 42px;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   text-transform: uppercase;
//   color: ${({ theme }) => theme.white};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   cursor: pointer;

//   &:hover {
//     background-color: ${({ theme }) => theme.lightYellow};
//     color: ${({ theme }) => theme.primaryDark};
//   }

//   @media (min-width: 1280px) {
//     background-color: ${({ theme }) => theme.primaryLight};
//     color: ${({ theme }) => theme.white};
//     border: 1px solid ${({ theme }) => theme.primaryLight};

//     &:hover {
//       background-color: ${({ theme }) => theme.primaryDark};
//       color: ${({ theme }) => theme.white};
//       border: 1px solid ${({ theme }) => theme.primaryDark};
//     }
//   }
// `;

// export const LogOutButton: React.FC<LogOutButtonProps> = ({
//   onLogout,
//   closeMenu,
// }) => {
//   const dispatch = useDispatch();

//   const handleLogoutClick = () => {
//     dispatch(
//       openModal({ type: 'ModalApproveAction', props: { onLogout, closeMenu } })
//     );
//   };

//   return (
//     <LogOutBtnContainer>
//       <LogOutBtn onClick={handleLogoutClick}>Log Out</LogOutBtn>
//     </LogOutBtnContainer>
//   );
// };

// // export const LogOutButton: React.FC<LogOutButtonProps> = ({
// //   onLogout,
// //   closeMenu,
// // }) => {
// // const [isModalOpen, setIsModalOpen] = useState(false);

// // const openModal = () => setIsModalOpen(true);
// // const closeModal = () => setIsModalOpen(false);

// // const handleLogout = () => {
// //   onLogout();
// //   closeModal();
// //   if (closeMenu) {
// //     closeMenu();
// //   }
// // };

// //   return (
// //     <LogOutBtnContainer>
// //       <LogOutBtn onClick={openModal}>Log Out</LogOutBtn>
// //       {isModalOpen && (
// //         <ModalApproveAction onLogout={handleLogout} closeModal={closeModal} />
// //       )}
// //     </LogOutBtnContainer>
// //   );
// // };
