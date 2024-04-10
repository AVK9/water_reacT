import {
  StatusContainer,
  WaterStatus,
  WaterMeter,
  WaterInfo,
  Button,
} from './WaterRatioPanel.styled';
import { useState } from 'react';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import sprite from '../../assets/img/sprite.svg';

import { useSelector } from 'react-redux';
import { selectDayWaterStat } from '../../redux/water/waterSelectors';

export const WaterRatioPanel = () => {
  const [isModalAddWaterOpen, setIsModalAddWaterOpen] = useState(false);
  const handleOpenModalAddWater = () => setIsModalAddWaterOpen(true);
  const handleCloseModalAddWater = () => setIsModalAddWaterOpen(false);
  const dailyNormFulfillment = useSelector(selectDayWaterStat);

  return (
    <>
      <StatusContainer>
        <WaterStatus>
          <p>Today</p>
          <WaterMeter $filled={dailyNormFulfillment.percentageWaterAmount}>
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
      {isModalAddWaterOpen && (
        <AddWaterModal onClose={handleCloseModalAddWater} />
      )}
    </>
  );
};

export default WaterRatioPanel;
