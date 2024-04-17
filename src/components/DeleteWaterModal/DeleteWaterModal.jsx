import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  ButtonCancel,
} from './DeleteWaterModal.styled';
import sprite from '../../assets/img/sprite.svg';
import { delWaterThunk } from '../../redux/water/waterThunk';

const DeleteWaterModal = ({ onClose, delId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  const handleDelete = () => {
    dispatch(delWaterThunk(delId)).then((data) => {
      if (!data.error) handleClose();
    });
    handleClose();
  };

  return (
    <OverlayDeleteModal isOpen={isOpen} onClick={handleBackdropClick}>
      <ContainerDeleteModal isOpen={isOpen}>
        <TitleContainer>
          <TitleDelete>{t('Delete entry')}</TitleDelete>

          <ButtonClose type="button" onClick={onClose}>
            <IconWrapper>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </IconWrapper>
          </ButtonClose>
        </TitleContainer>

        <TextDelete>
          {t('Are you sure you want to delete the entry?')}
        </TextDelete>

        <ButtonsContainer>
          <ButtonDelete type="button" onClick={handleDelete}>
            {t('Delete')}
          </ButtonDelete>
          <ButtonCancel type="button" onClick={onClose}>
            {t('Cancel')}
          </ButtonCancel>
        </ButtonsContainer>
      </ContainerDeleteModal>
    </OverlayDeleteModal>
  );
};

export default DeleteWaterModal;
