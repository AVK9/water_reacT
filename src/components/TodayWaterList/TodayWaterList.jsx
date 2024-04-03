import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
import { addWaterThunk, getWaterThunk } from '../../redux/water/waterThunk';
import {
  selectError,
  selectLoading,
  selectStateWaterDayList,
} from '../../redux/water/waterSelectors';
import { Loader } from '../Loader/Loader';

const TodayWaterList = () => {
  // const [dayWaterList, setDayWaterList] = useState('');
  const formatOfTime = 'HH:mm:ss';
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
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const addWater = () => {
    const body = { date, waterAmount };
    console.log('bodybody =>', body);
    dispatch(addWaterThunk(body));
  };
  useEffect(() => {
    dispatch(getWaterThunk());
  }, [dispatch]);
  // setDayWaterList(useSelector(selectStateWaterDayList));

  const dayWaterList = useSelector(selectStateWaterDayList);

  // console.log('dayWaterList =>', dayWaterList.waterRecords.length);
  // console.log('dayWaterList =>', dayWaterLists);
  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      <TodayWaterListBox>
        <Header>Today</Header>
        <AddWaterBox>
          {dayWaterList.length ? (
            <DayDrinkBox>
              {dayWaterList.map(({ _id, waterAmount, date }) => (
                <WaterAmountBox>
                  <IconWrapper>
                    <use href={`${sprite}#icon-glas-water`} />
                  </IconWrapper>
                  <WaterAmount>{waterAmount}</WaterAmount>
                  <WaterAmountTime>{date}</WaterAmountTime>
                  <IconWrapperStr>
                    <use href={`${sprite}#icon-pencil-square`} />
                  </IconWrapperStr>
                  <IconWrapperTrash>
                    <use href={`${sprite}#icon-trash`} />
                  </IconWrapperTrash>
                </WaterAmountBox>
              ))}
            </DayDrinkBox>
          ) : (
            <Loader /> || <p>No water</p>
          )}

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
    </>
  );
};

export default TodayWaterList;
