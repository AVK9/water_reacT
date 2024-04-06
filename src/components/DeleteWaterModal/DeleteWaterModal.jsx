import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSpring } from 'react-spring';
import {
  OverlayDeleteModal,
  ContainerDeleteModal,
  TitleContainer,
  TitleDelete,
  ButtonClose,
  IconWrapper,
  TextDelete,
  ButtonsContainer,
  ButtonDelete,
  ButtonCancel
} from './DeleteWaterModal.styled';
import sprite from '../../assets/img/sprite.svg';

const DeleteWaterModal = ({ onOpen, onClose }) => {
  const animation = useSpring({ 
    opacity: onOpen ? 1 : 0,
    config: { tension: 170, friction: 26 },
    from: { opacity: 0 }
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    };
  };
  
  useEffect(() => {
    const close = (e) => {
      if (e.code === 'Escape') {
        onClose();
      };
    };
      
    document.addEventListener('keydown', close);
      
    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  const handleDelete = () => {
    onClose();
  };
  
  return (
    <OverlayDeleteModal style={animation} onClick={handleBackdropClick}>
      <ContainerDeleteModal style={animation}>
        <TitleContainer>
          <TitleDelete>Delete entry</TitleDelete>

          <ButtonClose type='button' onClick={onClose}>
            <IconWrapper>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </IconWrapper>
          </ButtonClose>
        </TitleContainer>

        <TextDelete>Are you sure you want to delete the entry?</TextDelete>

        <ButtonsContainer>
          <ButtonDelete type='button' onClick={handleDelete}>Delete</ButtonDelete>
          <ButtonCancel type='button' onClick={onClose}>Cancel</ButtonCancel>
        </ButtonsContainer>
      </ContainerDeleteModal>
    </OverlayDeleteModal>
  );
};

export default DeleteWaterModal;
