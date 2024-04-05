import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../redux/auth/selectors';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { ContainerButton, ButtonUserLogo, UserName, AvatarContainer, Avatar, Initials, IconWrapper } from './UserLogo.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogo = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const handleOpenUserModal = () => setIsUserModalOpen(true);
  const handleCloseUserModal = () => setIsUserModalOpen(false);
  
  const profile = useSelector(profileSelector);
  const userEmail = profile.email;
  const userName = userEmail ? userEmail.split('@')[0] : '';
  const initials = userName ? userName.charAt(0).toUpperCase() : '';

  return (
    <ContainerButton>
      <ButtonUserLogo type='button' onClick={!isUserModalOpen ? handleOpenUserModal : handleCloseUserModal}>
        <UserName>{userName}</UserName>

        <AvatarContainer>
          <Avatar>
            <Initials>{initials}</Initials>
          </Avatar>
          
          <IconWrapper>
            <use xlinkHref={`${sprite}#icon-chevron-double-up`}></use>
          </IconWrapper>
        </AvatarContainer>
      </ButtonUserLogo>

      {isUserModalOpen && <UserLogoModal />}
    </ContainerButton>
  )
};

export default UserLogo;
