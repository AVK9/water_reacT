import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginOutThunk } from '../../redux/auth/authThunk';
import {
  OverlayLogoutModal,
  ContainerLogoutModal,
  TitleContainer,
  TitleLogout,
  ButtonClose,
  IconWrapper,
  TextLogout,
  ButtonsContainer,
  ButtonLogout,
  ButtonCancel,
} from './UserLogoutModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoutModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', close);

    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginOutThunk());
    handleClose();
  };

  return (
    <OverlayLogoutModal isOpen={isOpen} onClick={handleBackdropClick}>
      <ContainerLogoutModal isOpen={isOpen}>
        <TitleContainer>
          <TitleLogout>{t('Log out')}</TitleLogout>

          <ButtonClose type="button" onClick={handleClose}>
            <IconWrapper>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </IconWrapper>
          </ButtonClose>
        </TitleContainer>

        <TextLogout>{t('Do you really want to leave?')}</TextLogout>

        <ButtonsContainer>
          <ButtonLogout type="button" onClick={handleLogout}>
            {t('Log out')}
          </ButtonLogout>
          <ButtonCancel type="button" onClick={handleClose}>
            {t('Cancel')}
          </ButtonCancel>
        </ButtonsContainer>
      </ContainerLogoutModal>
    </OverlayLogoutModal>
  );
};

export default UserLogoutModal;
