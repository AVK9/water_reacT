import React, { useState, useEffect } from 'react';
import Modal from '../SettingModal/Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import {
  TransparentOverlay,
  ContainerUserLogoModal,
  ButtonsUserLogoModal,
  IconWrapper,
  ButtonText
} from './UserLogoModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const handleOpenModalLogout = () => setIsModalLogoutOpen(true);
  const handleCloseModalLogout = () => setIsModalLogoutOpen(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && <TransparentOverlay  onClick={handleClose}/>}

      <ContainerUserLogoModal isOpen={isOpen}>
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

        <Modal isOpen={isModalOpen} onClose={() => handleCloseModal(setIsModalOpen)} />
        {isModalLogoutOpen && <UserLogoutModal onClose={handleCloseModalLogout} />}
      </ContainerUserLogoModal>
    </>
  )
};

export default UserLogoModal;
