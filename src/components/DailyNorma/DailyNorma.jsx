import { useEffect, useState } from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import {
  DailyNormaWrapper,
  DailyNormaTitle,
  EditButton,
  DailyNormaValue,
  DailyNormaContent,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const [dailyNorm, setDailyNorm] = useState(2.0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (newDailyNorm) => {
    setIsModalOpen(false);
    if (typeof newDailyNorm === 'number') {
      setDailyNorm(newDailyNorm);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <DailyNormaWrapper>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaContent>
          <DailyNormaValue>{dailyNorm.toFixed(1)} L</DailyNormaValue>
          <EditButton onClick={handleOpenModal}>Edit</EditButton>
        </DailyNormaContent>
      </DailyNormaWrapper>
      {isModalOpen && (
        <DailyNormaModal
          onClose={handleCloseModal}
          setDailyNorm={setDailyNorm}
        />
      )}
    </>
  );
};

export default DailyNorma;
