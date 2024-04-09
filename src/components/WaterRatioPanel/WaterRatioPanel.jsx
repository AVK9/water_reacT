import {
  StatusContainer,
  WaterStatus,
  WaterMeter,
  WaterInfo,
  Button,
} from './WaterRatioPanel.styled';
import { useState, useEffect } from 'react';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import sprite from '../../assets/img/sprite.svg';


export const WaterRatioPanel = () => {
  const [isModaAddWaterOpen, setIsModalAddWaterOpen] = useState(false);
  const handleOpenModalAddWater = () => setIsModalAddWaterOpen(true);
  const handleCloseModalAddWater = () => setIsModalAddWaterOpen(false);

  return (
    <>
      <StatusContainer>
        <WaterStatus>
          <p>Today</p>
          <WaterMeter>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterStatus>
        <Button onClick={handleOpenModalAddWater}>
          <svg>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Add water
        </Button>
      
      </StatusContainer>
      {isModaAddWaterOpen && (
        <AddWaterModal onClose={handleCloseModalAddWater} />
      )}
    </>
  );
};

export default WaterRatioPanel;
