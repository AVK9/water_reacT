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
// import { DateTime } from 'luxon';

import {
  addWaterThunk,
  changeWaterThunk,
  delWaterThunk,
  getWaterDayThunk,
  getWaterThunk,
} from '../../redux/water/waterThunk';
import {
  selectError,
  selectLoading,
  selectStateWaterDayList,
} from '../../redux/water/waterSelectors';
import { Loader } from '../Loader/Loader';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

const TodayWaterList = () => {
  // console.log('todaytodaytoday =>', today);

  // const date = new Date();
  // const date = DateTime.now().setZone('Europe/Kiev');
  const now = new Date();
  const date = dateFns.sub(now, { minutes: -180 });
  // const now = DateTime.now();
  // const date = now.setZone(now.offset - 180, { keepLocalTime: true });
  // const timezoneOffset = 'kyivTimeZone';
  // console.log('nowdate =>', date);

  const waterAmount = 25;

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  //, timezoneOffset: '+0300'
  const addWater = () => {
    const body = { date, waterAmount };
    console.log('bodybody =>', body);
    dispatch(addWaterThunk(body));
  };
  useEffect(() => {
    // dispatch(getWaterThunk());
    dispatch(getWaterDayThunk());
  }, [dispatch]);

  // setDayWaterList(useSelector(selectStateWaterDayList));

  const dayWaterList = useSelector(selectStateWaterDayList);
  // console.log('dayWaterList =>', dayWaterList[0].date);
  // console.log(
  //   'dayWaterList =>',
  //   dateFns.format(dayWaterList[0].date, formatOfDay)
  // );
  // console.log(
  //   'dayWaterList =>',
  //   dateFns.format(dayWaterList[0].date, formatOfManth)
  // );
  // const selectDay = useSelector(selectSelectDay);
  // console.log('dayWaterList =>', dayWaterList.waterRecords.length);
  // console.log('dayWaterList =>', dayWaterLists);
  // if (now === dayWaterList[0].date)
  // const [today, setToday] = useState(dayWaterList[0].date);

  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      <TodayWaterListBox>
        <Header>
          Today
          {/* {!dayWaterList[0].date ? 'sdf' : 'Today'} */}
        </Header>
        {/* <Header>{today && dayWaterList[0].date}</Header> */}
        <AddWaterBox>
          {dayWaterList.length ? (
            <DayDrinkBox>
              {dayWaterList.map(({ _id, waterAmount, date }) => (
                <WaterAmountBox key={_id}>
                  <IconWrapper>
                    <use href={`${sprite}#icon-glas-water`} />
                  </IconWrapper>
                  <WaterAmount>{waterAmount} ml</WaterAmount>
                  <WaterAmountTime>{date.slice(11, 16)}</WaterAmountTime>
                  <IconWrapperStr
                    onClick={() => {
                      dispatch(changeWaterThunk({ _id, waterAmount, date }));
                      dispatch(getWaterThunk());
                    }}
                  >
                    <use href={`${sprite}#icon-pencil-square`} />
                  </IconWrapperStr>
                  <IconWrapperTrash
                    onClick={() => {
                      dispatch(delWaterThunk(_id));
                      dispatch(getWaterDayThunk());
                    }}
                  >
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
