// import { openModal } from '../../redux/modal/slice';
// import { LogOutButton } from '../LogOutButton';
// import { useDispatch } from 'react-redux';
// import { PetsFavoriteCard } from '../PetsFavoriteCard/PetsFavoriteCard';
// import {
//   AddPetBlock,
//   LogOutblock,
//   PetsBlockContainer,
//   PetsBlockNavLink,
//   PetsItem,
//   PetsList,
// } from './PetsBlock.styled';

// export const PetsBlock: React.FC = () => {
//   const dispatch = useDispatch();

//   return (
//     <PetsBlockContainer>
//       <AddPetBlock>
//         <h2>My pets</h2>
//         <PetsBlockNavLink to="/add-ped">Add pet +</PetsBlockNavLink>
//       </AddPetBlock>
//       <PetsList>
//         <PetsItem>
//           <PetsFavoriteCard />
//         </PetsItem>
//       </PetsList>
//       <LogOutblock>
//         <LogOutButton
//           onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
//         />
//       </LogOutblock>
//     </PetsBlockContainer>
//   );
// };
import { openModal } from '../../redux/modal/slice';
import { LogOutButton } from '../LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { PetsFavoriteCard } from '../PetsFavoriteCard/PetsFavoriteCard';
import { selectUserProfile } from '../../redux/user/selectors';
import {
  AddPetBlock,
  LogOutblock,
  PetsBlockContainer,
  PetsBlockNavLink,
  PetsItem,
  PetsList,
} from './PetsBlock.styled';

export const PetsBlock: React.FC = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);

  return (
    <PetsBlockContainer>
      <AddPetBlock>
        <h2>My pets</h2>
        <PetsBlockNavLink to="/add-ped">Add pet +</PetsBlockNavLink>
      </AddPetBlock>
      <PetsList>
        {userProfile?.pets?.map(pet => (
          <PetsItem key={pet._id}>
            <PetsFavoriteCard pet={pet} />
          </PetsItem>
        ))}
      </PetsList>
      <LogOutblock>
        <LogOutButton
          onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
        />
      </LogOutblock>
    </PetsBlockContainer>
  );
};
