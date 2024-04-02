import { useEffect } from 'react';
import sprite from '../../../assets/img/sprite.svg';
import {
  ButtonClose,
  HeaderSettingModal,
  HeaderSettingName,
  ModalContent,
  ModalOverlay,
  WrapperModalContent,
} from './Modal.styled';
import SettingModalForm from '../SettingModalForm';
import UploadImage from '../UploadImage/UploadImage';

const Modal = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  return (
    <>
      {isOpen&&(
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <HeaderSettingModal>
            <HeaderSettingName>Setting</HeaderSettingName>
            <ButtonClose onClick={onClose}>
              <svg>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </ButtonClose>
          </HeaderSettingModal>
          <WrapperModalContent>
            {children}
            <UploadImage />
            <SettingModalForm />
          </WrapperModalContent>
        </ModalContent>
      </ModalOverlay>
    )}</>
  );
};
export default Modal;
