import { addWaterApi } from '../../redux/Api/apiWater';
import { useDispatch } from 'react-redux';
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
  DayDrinkBox,
} from './TodayWaterList.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';
import { addWaterThunk } from '../../redux/water/waterThunk';

const TodayWaterList = () => {
  const date = new Date();
  const waterAmount = 170;
  const waterAmountCauntDD = [
    { waterAmountD: '150', dates: '15.00 PM' },
    { waterAmountD: '200', dates: '14.00 PM' },
    { waterAmountD: '250', dates: '16.00 PM' },
    { waterAmountD: '200', dates: '14.00 PM' },
    { waterAmountD: '250', dates: '16.00 PM' },
    { waterAmountD: '300', dates: '16.30 PM' },
    { waterAmountD: '300', dates: '16.30 PM' },
    { waterAmountD: '200', dates: '17.00 PM' },
  ];
  const dispatch = useDispatch();

  const addWater = () => {
    const body = { date, waterAmount };
    console.log('bodybody =>', body);
    // addWaterApi(body);
    dispatch(addWaterThunk(body));
  };

  return (
    <TodayWaterListBox>
      <Header>Today</Header>
      <AddWaterBox>
        <DayDrinkBox>
          {waterAmountCauntDD.map(({ waterAmountD, dates }) => (
            <WaterAmountBox>
              <IconWrapper>
                <use href={`${sprite}#icon-glas-water`} />
              </IconWrapper>
              <WaterAmount>{waterAmountD}</WaterAmount>
              <WaterAmountTime>{dates}</WaterAmountTime>
              <IconWrapperStr>
                <use href={`${sprite}#icon-pencil-square`} />
              </IconWrapperStr>
              <IconWrapperTrash>
                <use href={`${sprite}#icon-trash`} />
              </IconWrapperTrash>
            </WaterAmountBox>
          ))}
        </DayDrinkBox>
        {/* <WaterAmountBox>
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
        </WaterAmountBox> */}

        <BtnAddWater onClick={addWater}>+ Add Water</BtnAddWater>
      </AddWaterBox>
    </TodayWaterListBox>
  );
};

export default TodayWaterList;
