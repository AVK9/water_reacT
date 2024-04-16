import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ContainerWDW,
  TitleWDW,
  ListWDW,
  ItemWDW,
  Point,
  TextWDW,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  const { t } = useTranslation();

  return (
    <ContainerWDW>
      <TitleWDW>{t('Why drink water')}</TitleWDW>

      <ListWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>{t('Supply of nutrients to all organs')}</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>{t('Providing oxygen to the lungs')}</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>{t('Maintaining the work of the heart')}</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>{t('Release of processed substances')}</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>
            {t('Ensuring the stability of the internal environment')}
          </TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>{t('Maintaining within the normal temperature')}</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>
            {t('Maintaining an immune system capable of resisting disease')}
          </TextWDW>
        </ItemWDW>
      </ListWDW>
    </ContainerWDW>
  );
};

export default WhyDrinkWater;
