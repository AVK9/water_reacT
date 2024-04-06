import React, { useState } from 'react';
import Modal from '../SettingModal/Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import { useSpring } from 'react-spring';
import {
  ContainerUserLogoModal,
  ButtonsUserLogoModal,
  IconWrapper,
  ButtonText
} from './UserLogoModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoModal = ({ onOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const handleOpenModalLogout = () => setIsModalLogoutOpen(true);
  const handleCloseModalLogout = () => setIsModalLogoutOpen(false);

  const animation = useSpring({ 
    opacity: onOpen ? 1 : 0,
    config: { tension: 170, friction: 26 },
    from: { opacity: 0 }
  });

  return (
    <ContainerUserLogoModal style={animation}>
      <ButtonsUserLogoModal type='button' onClick={handleOpenModal}>
        <IconWrapper>
          <use xlinkHref={`${sprite}#icon-cog-6-tooth`}></use>
        </IconWrapper>

        <ButtonText>Setting</ButtonText>
      </ButtonsUserLogoModal>

      <ButtonsUserLogoModal type='button' onClick={handleOpenModalLogout}>
        <IconWrapper>
          <use xlinkHref={`${sprite}#icon-arrow-right-on-rectangle`}></use>
        </IconWrapper>

        <ButtonText>Log out</ButtonText>
      </ButtonsUserLogoModal>

      <Modal isOpen={isModalOpen}
        onClose={() =>handleCloseModal(setIsModalOpen) }>
      </Modal>
      
      {isModalLogoutOpen && <UserLogoutModal onOpen={handleOpenModalLogout} onClose={handleCloseModalLogout} />}
    </ContainerUserLogoModal>
  )
};

export default UserLogoModal;
