import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginOutThunk } from '../../redux/auth/authThunk';
import { isAuthSelector } from '../../redux/auth/selectors';
import { Section } from '../Section/Section';
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
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/welcome');
    }
  }, [isAuth, navigate]);

  const handleLogout = () => {
    dispatch(loginOutThunk());
    onClose();
  };
  
  return (
    <OverlayLogoutModal>
      <ContainerLogoutModal>
        <TitleContainer>
          <TitleLogout>Log out</TitleLogout>

          <ButtonClose type='button' onClick={isAuth && onClose}>
            <IconWrapper>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </IconWrapper>
          </ButtonClose>
        </TitleContainer>

        <TextLogout>Do you really want to leave?</TextLogout>

        <ButtonsContainer>
          <ButtonLogout type='button' onClick={handleLogout}>Log out</ButtonLogout>
          <ButtonCancel type='button' onClick={onClose}>Cancel</ButtonCancel>
        </ButtonsContainer>
      </ContainerLogoutModal>
    </OverlayLogoutModal>
  );
};

export default UserLogoutModal;
