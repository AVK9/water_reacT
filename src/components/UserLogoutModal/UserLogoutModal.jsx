import React from 'react';
import { useDispatch } from 'react-redux';
import { loginOutThunk } from '../../redux/auth/authThunk';
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
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginOutThunk());
    onClose();
  };
  
  return (
    <OverlayLogoutModal>
      <ContainerLogoutModal>
        <TitleContainer>
          <TitleLogout>Log out</TitleLogout>

          <ButtonClose type='button' onClick={onClose}>
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
