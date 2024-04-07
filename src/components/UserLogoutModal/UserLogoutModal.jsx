import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginOutThunk } from '../../redux/auth/authThunk';
import { isAuthSelector } from '../../redux/auth/selectors';
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
  ButtonCancel
} from './UserLogoutModal.styled';
import sprite from '../../assets/img/sprite.svg';

const UserLogoutModal = ({ onClose }) => {
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

  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginOutThunk());
    handleClose();
    if (isAuth) {
      navigate('/welcome');
    }
  };
  
  return (
    <OverlayLogoutModal isOpen={isOpen} onClick={handleBackdropClick}>
      <ContainerLogoutModal isOpen={isOpen}>
        <TitleContainer>
          <TitleLogout>Log out</TitleLogout>

          <ButtonClose type='button' onClick={handleClose}>
            <IconWrapper>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </IconWrapper>
          </ButtonClose>
        </TitleContainer>

        <TextLogout>Do you really want to leave?</TextLogout>

        <ButtonsContainer>
          <ButtonLogout type='button' onClick={handleLogout}>Log out</ButtonLogout>
          <ButtonCancel type='button' onClick={handleClose}>Cancel</ButtonCancel>
        </ButtonsContainer>
      </ContainerLogoutModal>
    </OverlayLogoutModal>
  );
};

export default UserLogoutModal;
