import React, { useState } from 'react';
import Modal from '../SettingModal/Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import {
  ContainerUserLogoModal,
  ButtonsUserLogoModal,
  IconWrapper,
 ButtonText
} from './UserLogoModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = (setIsModalOpen) => setIsModalOpen(false);

  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const handleOpenModalLogout = () => setIsModalLogoutOpen(true);
  const handleCloseModalLogout = () => setIsModalLogoutOpen(false);

  return (
    <ContainerUserLogoModal>
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
      
      {isModalLogoutOpen && <UserLogoutModal onClose={handleCloseModalLogout} />}
    </ContainerUserLogoModal>
  )
};

export default UserLogoModal;
