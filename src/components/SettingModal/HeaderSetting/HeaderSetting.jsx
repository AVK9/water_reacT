import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Button, ContainerFuild } from './HeaderSetting.styled';

const HeaderSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = (setIsModalOpen) => setIsModalOpen(false);
  
  return (
    <ContainerFuild>
      <Button onClick={handleOpenModal}>Setting</Button>
      <Modal isOpen={isModalOpen}
        onClose={() =>handleCloseModal(setIsModalOpen) }>
        
    </Modal>
    </ContainerFuild>
  );
};

export default HeaderSetting;
