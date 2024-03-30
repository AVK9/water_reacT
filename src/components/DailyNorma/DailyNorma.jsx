import { useState } from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import { DailyNormaWrapper, DailyNormaTitle, EditButton, DailyNormaValue, DailyNormaContent } from './DailyNorma.styled';

const DailyNorma = () => {
  const [dailyNorm, setDailyNorm] = useState(2.0); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (newDailyNorm) => {
    setIsModalOpen(false);
    setDailyNorm(newDailyNorm);
  };

  return (
    <DailyNormaWrapper>
      <DailyNormaTitle>My daily norma</DailyNormaTitle>
      <DailyNormaContent>
        <DailyNormaValue>{dailyNorm.toFixed(1)} L</DailyNormaValue>
        <EditButton onClick={handleOpenModal}>Edit</EditButton>
      </DailyNormaContent>
      {isModalOpen && <DailyNormaModal onClose={handleCloseModal} />}
    </DailyNormaWrapper>
  );
};


export default DailyNorma;