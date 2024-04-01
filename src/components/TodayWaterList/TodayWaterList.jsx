import { addWaterApi } from '../../redux/Api/apiWater';

import {
  AddWaterBox,
  BtnAddWater,
  Header,

  IconWrapper,
  TodayWaterListBox,
  WaterAmountBox,
  WaterAmountTime,
  WaterAmount,
  IconWrapperStr,
  IconWrapperTrash,
} from './TodayWaterList.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';

const TodayWaterList = () => {
  const date = new Date();
  const waterAmount = 200;
  const waterAmountCaunt = [
    { waterAmount: '200', date: '14.00 PM' },
    { waterAmount: '200', date: '14.00 PM' },
    { waterAmount: '200', date: '14.00 PM' },
  ];

  const addWater = () => {
    addWaterApi({ date, waterAmount });
  };

  return (
    <TodayWaterListBox>
      <Header>Today</Header>
      <AddWaterBox>
        {/* {waterAmountCaunt.map({ waterAmount, date })=>{<WaterAmountBox>
          <IconWrapper>
            <use href={`${sprite}#icon-glas-water`} />
          </IconWrapper>
          <WaterAmount>200 ml</WaterAmount>
          <WaterAmountTime>14.00 PM</WaterAmountTime>
          <IconWrapperStr>
            <use href={`${sprite}#icon-pencil-square`} />
          </IconWrapperStr>
          <IconWrapperTrash>
            <use href={`${sprite}#icon-trash`} />
          </IconWrapperTrash> 
        </WaterAmountBox>}} */}
        <WaterAmountBox>
          <IconWrapper>
            <use href={`${sprite}#icon-glas-water`} />
          </IconWrapper>
          <WaterAmount>200 ml</WaterAmount>
          <WaterAmountTime>14.00 PM</WaterAmountTime>
          <IconWrapperStr>
            <use href={`${sprite}#icon-pencil-square`} />
          </IconWrapperStr>
          <IconWrapperTrash>
            <use href={`${sprite}#icon-trash`} />
          </IconWrapperTrash>
        </WaterAmountBox>
        <BtnAddWater onClick={addWater}>+ Add Water</BtnAddWater>

      </AddWaterBox>
    </TodayWaterListBox>
  );
};

export default TodayWaterList;
