import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
  delWaterThunk,
  getWaterThunk,
} from '../../redux/water/waterThunk';
import {
  selectError,
  selectLoading,
  selectStateWaterDayList,
} from '../../redux/water/waterSelectors';
import { Loader } from '../Loader/Loader';

const TodayWaterList = () => {
  // const [dayWaterList, setDayWaterList] = useState('');

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
    dispatch(getWaterThunk());
  }, [dispatch]);

  // setDayWaterList(useSelector(selectStateWaterDayList));

  const dayWaterList = useSelector(selectStateWaterDayList);

  // const selectDay = useSelector(selectSelectDay);
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
                <WaterAmountBox
                  key={_id}
                  onClick={() => {
                    dispatch(delWaterThunk(_id));
                    dispatch(getWaterThunk());
                  }}
                >
                  <IconWrapper>
                    <use href={`${sprite}#icon-glas-water`} />
                  </IconWrapper>
                  <WaterAmount>{waterAmount} ml</WaterAmount>
                  <WaterAmountTime>{date.slice(11, 16)}</WaterAmountTime>
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
