import React from 'react';
import { PetProfile } from '../../redux/user/user.types';

import {
  BtnTrash,
  IconTrash,
  MyPetsCardContainer,
  MyPetsCardHeader,
  MyPetsCardList,
  MyPetsCardItem,
  WrapAvatarPets,
} from './MyPetsCard.styled';

interface MyPetsCardProps {
  pet: PetProfile;
}

export const MyPetsCard: React.FC<MyPetsCardProps> = ({ pet }) => {
  return (
    <MyPetsCardContainer>
      <WrapAvatarPets>
        <img src={pet.imgURL} alt="Avatar pets" />
      </WrapAvatarPets>
      <div>
        <MyPetsCardHeader>
          <h3>{pet.title}</h3>
          <BtnTrash>
            <IconTrash iconName="trash" />
          </BtnTrash>
        </MyPetsCardHeader>
        <MyPetsCardList>
          <MyPetsCardItem>
            <p>Name</p>
            <span>{pet.name}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Birthday</p>
            <span>{pet.birthday}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Sex</p>
            <span>{pet.sex}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Species</p>
            <span>{pet.species}</span>
          </MyPetsCardItem>
        </MyPetsCardList>
      </div>
    </MyPetsCardContainer>
  );
};

// export const MyPetsCard: React.FC = () => {
//   return (
//     <MyPetsCardContainer>
//       <WrapAvatarPets>
//         <img src="#" alt="Avatar pets" />
//       </WrapAvatarPets>
//       <div>
//         <MyPetsCardHeader>
//           <h3>Golden Retriever Puppies</h3>
//           <BtnTrash>
//             <IconTrash iconName="trash" />
//           </BtnTrash>
//         </MyPetsCardHeader>
//         <MyPetsCardList>
//           <MyPetsCardItem>
//             <p>Name</p>
//             <span>Daisy</span>
//           </MyPetsCardItem>
//           <MyPetsCardItem>
//             <p>Birthday</p>
//             <span>01.10.2022</span>
//           </MyPetsCardItem>
//           <MyPetsCardItem>
//             <p>Sex</p>
//             <span>Female</span>
//           </MyPetsCardItem>
//           <MyPetsCardItem>
//             <p>Species</p>
//             <span>Dog</span>
//           </MyPetsCardItem>
//         </MyPetsCardList>
//       </div>
//     </MyPetsCardContainer>
//   );
// };
