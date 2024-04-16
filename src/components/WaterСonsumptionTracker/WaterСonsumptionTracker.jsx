import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import sprite from '../../assets/img/sprite.svg';
import {
  TrackerContainer,
  Title,
  Subtitle,
  TitleTracker,
  ListTrackers,
  ItemTracker,
  TextTracker,
  ButtonTracker,
} from './WaterСonsumptionTracker.styled';

const WaterConsumptionTracker = () => {
  const { t } = useTranslation();

  return (
    <TrackerContainer>
      <Title>{t('Water consumption tracker')}</Title>
      <Subtitle>{t('Record daily water intake and track')}</Subtitle>
      <TitleTracker>{t('Tracker Benefits')}</TitleTracker>

      <ListTrackers>
        <ItemTracker>
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-calendar-days`}></use>
          </svg>
          <TextTracker>{t('Habit drive')}</TextTracker>
        </ItemTracker>
        <ItemTracker>
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-presentation-chart-bar`}></use>
          </svg>
          <TextTracker>{t('View statistics')}</TextTracker>
        </ItemTracker>
        <ItemTracker>
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-wrench-screwdriver`}></use>
          </svg>
          <TextTracker>{t('Personal rate setting')}</TextTracker>
        </ItemTracker>
      </ListTrackers>

      <Link to="/signup">
        <ButtonTracker type="button">{t('Try Tracker')}</ButtonTracker>
      </Link>
    </TrackerContainer>
  );
};

export default WaterConsumptionTracker;
