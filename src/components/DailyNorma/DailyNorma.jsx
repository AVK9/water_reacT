import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../redux/auth/selectors';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import { useTranslation } from 'react-i18next';
import {
  DailyNormaWrapper,
  DailyNormaTitle,
  EditButton,
  DailyNormaValue,
  DailyNormaContent,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const { t } = useTranslation();
  const profileWaterRate = useSelector(profileSelector).waterRate / 1000;

  //   ? parseFloat(localStorage.getItem('dailyNorm'))

  const [dailyNorm, setDailyNorm] = useState(2);
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
    if (profileWaterRate) {
      setDailyNorm(profileWaterRate);
    }
  }, [profileWaterRate]);

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
        <DailyNormaTitle>{t('My daily norma')}</DailyNormaTitle>
        <DailyNormaContent>
          <DailyNormaValue>{dailyNorm.toFixed(1)} L</DailyNormaValue>
          <EditButton onClick={handleOpenModal}>{t('Edit')}</EditButton>
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
