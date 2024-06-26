import styled from '@emotion/styled';

export const TodayWaterListBox = styled.div`
  position: relative;
`;
export const Header = styled.h3`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 125%;
  color: var(--primery-color-black);
  margin-bottom: 16px;
`;
export const AddWaterBox = styled.div`
  width: 100%;
  height: 212px;
  margin-bottom: 24px;
  /* display: flex; */

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const BtnAddWater = styled.div`
  width: 97px;
  height: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--primery-color-blue);
  position: absolute;
  bottom: 0;
  transition: color 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--secondary-color-5);
  }
`;

export const WaterAmountBox = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--secondary-color---5);
  border-top: 1px solid var(--secondary-color---5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.svg`
  /* padding-top: 7px; */
  /* padding-bottom: 0; */
  width: 30px;
  height: 30px;
  fill: #407bff;
  margin-right: 18px;
  align-content: center;
`;

export const IconBox = styled.div`
  display: inline-flex;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 35%;
    height: 1px;
    background-color: var(--secondary-color-4);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    stroke: var(--primery-color-blue);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const IconWrapperStr = styled.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1px;
  stroke: var(--secondary-color-4);
  fill: transparent;
  margin-right: 20px;
`;

export const IconBoxTrash = styled.div`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 90%;
    height: 1px;
    background-color: var(--secondary-color-3);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    stroke: var(--primery-color-blue);

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
export const IconWrapperTrash = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke-width: 1px;
  stroke: var(--secondary-color-3);
`;

export const WaterAmountTime = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
  color: var(--primery-color-black);
  white-space: nowrap;
`;
export const WaterAmount = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: var(--primery-color-blue);
  margin-right: 19px;
  white-space: nowrap;
`;

export const DrinkinfInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const DayDrinkBox = styled.div`
  max-height: 180px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: red;
  &::-webkit-scrollbar {
    width: 2px; /* Товщина скролбара */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(175, 0, 0, 0.8);
  }
`;
export const DrinkinfContolBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
