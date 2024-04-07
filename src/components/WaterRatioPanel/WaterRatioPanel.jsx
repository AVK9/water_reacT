import {
  StatusContainer,
  WaterStatus,
  WaterMeter,
  WaterInfo,
  Button,
} from './WaterRatioPanel.styled';

import sprite from '../../assets/img/sprite.svg';

import { Section } from '../Section/Section';

export const WaterRatioPanel = () => {
  return (
    <Section>
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
        <Button onClick>
          <svg>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Add water
        </Button>
      </StatusContainer>
    </Section>
  );
};

export default WaterRatioPanel;
