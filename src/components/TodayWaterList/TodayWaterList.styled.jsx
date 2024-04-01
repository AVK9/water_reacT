import styled from '@emotion/styled';

export const TodayWaterListBox = styled.div`
  width: 100%;

  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
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
  width: 264px;
  height: 212px;

  margin-bottom: 24px;

  display: flex;

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
`;

export const WaterAmountBox = styled.div`
  width: 254px;
  height: 50px;
  border-bottom: 1px solid var(--secondary-color---5);
  border-top: 1px solid var(--secondary-color---5);
  display: flex;
  align-items: center;
`;
export const IconWrapper = styled.svg`
  width: 26px;
  height: 26px;
  fill: #407bff;
  margin-right: 18px;
`;
export const IconWrapperStr = styled.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1px;
  stroke: var(--secondary-color-4);
  fill: transparent;
  margin-right: 20px;
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
  font-size: 12px;
  line-height: 200%;
  color: var(--primery-color-black);
  margin-right: 45px;
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
