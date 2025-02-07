import React from 'react';
import { ProfilePageContainer } from './ProfilePage.styled';
import { UserCard } from '../../components/UserCard/UserCard';
import { MyNotices } from '../../components/MyNotices/MyNotices';

export const ProfilePage: React.FC = () => {
  return (
    <ProfilePageContainer>
      <UserCard />
      <MyNotices />
    </ProfilePageContainer>
  );
};

// import React, { useState } from 'react';
// import {
//   PetsInformationWrappper,
//   ProfilePageContainer,
//   UserInformationWrappper,
// } from './ProfilePage.styled';
// import { LogOutButton } from '../../components/LogOutButton';
// import { NavLink } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { openModal } from '../../redux/modal/slice';
// import { useDispatch } from 'react-redux';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup
//     .string()
//     .email('Invalid email')
//     .matches(
//       /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//       'Invalid email format'
//     )
//     .required('Email is required'),
//   phone: yup
//     .string()
//     .matches(/^\+38\d{10}$/, 'Invalid phone number')
//     .required('Phone is required'),
// });

// const EditUserBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => (
//   <button onClick={onClick} type="button">
//     ✏️
//   </button>
// );

// const UserBlock: React.FC = () => (
//   <div>
//     <div>Upload photo</div>
//     <p>Name</p>
//     <p>Email</p>
//     <p>Phone</p>
//   </div>
// );

// const PetsBlock: React.FC = () => (
//   <div>
//     <p>My pets</p>
//     <button type="button">Add pet +</button>
//   </div>
// );

// const PetsList: React.FC = () => (
//   <div>
//     <p>No pets yet</p>
//   </div>
// );

// const UserCard: React.FC = () => (
//   <div>
//     <EditUserBtn onClick={() => console.log('Open edit modal')} />
//     <UserBlock />
//     <PetsBlock />
//   </div>
// );

// const MyNotices: React.FC<{
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }> = ({ activeTab, setActiveTab }) => (
//   <PetsInformationWrappper>
//     <div>
//       <button
//         type="button"
//         onClick={() => setActiveTab('favorites')}
//         className={activeTab === 'favorites' ? 'active' : ''}
//       >
//         My favorite pets
//       </button>
//       <button
//         type="button"
//         onClick={() => setActiveTab('viewed')}
//         className={activeTab === 'viewed' ? 'active' : ''}
//       >
//         Viewed
//       </button>
//     </div>
//     <p>
//       Oops,
//       <NavLink to="/friends">looks like there aren't any furries</NavLink> on
//       our adorable page yet. Do not worry! View your pets on the "find your
//       favorite pet" page and add them to your favorites.
//     </p>
//   </PetsInformationWrappper>
// );

// export const ProfilePage: React.FC = () => {
//   const dispatch = useDispatch();
//   const [activeTab, setActiveTab] = useState<'favorites' | 'viewed'>(
//     'favorites'
//   );
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <ProfilePageContainer>
//       <UserInformationWrappper>
//         <UserCard />
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input type="text" placeholder="Name" {...register('name')} />
//           <p>{errors.name?.message}</p>
//           <input type="email" placeholder="Email" {...register('email')} />
//           <p>{errors.email?.message}</p>
//           <input type="text" placeholder="Phone" {...register('phone')} />
//           <p>{errors.phone?.message}</p>
//           <button type="submit">Save</button>
//         </form>
//         <PetsBlock />
//         <PetsList />
//       </UserInformationWrappper>
//       <MyNotices activeTab={activeTab} setActiveTab={setActiveTab} />
//       <LogOutButton
//         onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
//       />
//     </ProfilePageContainer>
//   );
// };
