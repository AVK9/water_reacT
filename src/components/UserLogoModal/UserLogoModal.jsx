import React, { useState } from 'react';
import Modal from '../SettingModal/Modal/Modal';
import { ContainerUserLogoModal, ButtonsUserLogoModal, IconWrapper, ButtonText } from './UserLogoModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = (setIsModalOpen) => setIsModalOpen(false);

  return (
    <ContainerUserLogoModal>
      <ButtonsUserLogoModal onClick={handleOpenModal}>
        <IconWrapper>
          <use xlinkHref={`${sprite}#icon-cog-6-tooth`}></use>
        </IconWrapper>
        <ButtonText>Setting</ButtonText>
      </ButtonsUserLogoModal>
      <ButtonsUserLogoModal>
        <IconWrapper>
          <use xlinkHref={`${sprite}#icon-arrow-right-on-rectangle`}></use>
        </IconWrapper>
        <ButtonText>Log out</ButtonText>
      </ButtonsUserLogoModal>
      <Modal isOpen={isModalOpen}
        onClose={() =>handleCloseModal(setIsModalOpen) }>
      </Modal>
    </ContainerUserLogoModal>
  )
};

export default UserLogoModal;
