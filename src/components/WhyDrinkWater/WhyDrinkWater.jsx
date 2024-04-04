import React from 'react';
import {
  ContainerWDW,
  TitleWDW,
  ListWDW,
  ItemWDW,
  Point,
  TextWDW,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  return (
    <ContainerWDW>
      <TitleWDW>Why drink water</TitleWDW>

      <ListWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Supply of nutrients to all organs</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Providing oxygen to the lungs</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Maintaining the work of the heart</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Release of processed substances</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Ensuring the stability of the internal environment</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>Maintaining within the normal temperature</TextWDW>
        </ItemWDW>
        <ItemWDW>
          <Point></Point>
          <TextWDW>
            Maintaining an immune system capable of resisting disease
          </TextWDW>
        </ItemWDW>
      </ListWDW>
    </ContainerWDW>
  );
};

export default WhyDrinkWater;
