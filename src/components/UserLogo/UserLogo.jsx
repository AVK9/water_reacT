import React, { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import { ButtonUserLogo, UserName, AvatarContainer, Avatar, Initials, IconWrapper } from './UserLogo.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = 'David';
  const initials = name ? name.charAt(0).toUpperCase() : '';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonUserLogo onClick={isModalOpen ? closeModal : openModal}>
        <UserName>{name}</UserName>
        <AvatarContainer>
          <Avatar>
            <Initials>{initials}</Initials>
          </Avatar>
          <IconWrapper>
            <use xlinkHref={`${sprite}#icon-chevron-double-up`}></use>
          </IconWrapper>
        </AvatarContainer>
      </ButtonUserLogo>
      {isModalOpen && <UserLogoModal />}
    </>
  )
};

export default UserLogo;
