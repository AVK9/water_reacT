import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import WaterModal from '../About-waterModal/aboutWaterEdit';
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
import { format } from 'date-fns';

import {
  addWaterThunk,
  changeWaterThunk,
  delWaterThunk,
  getWaterThunk,
} from '../../redux/water/waterThunk';
import {
  selectError,
  selectLoading,
  selectSelectDay,
  selectSelectMonth,
  selectStateWaterDayList,
} from '../../redux/water/waterSelectors';
import { Loader } from '../Loader/Loader';

const formatOfManth = 'MMMM';

const TodayWaterList = () => {
  const [header, setHeader] = useState('Today');
  const [day, setDay] = useState('');
  ///////+
  const [showModal, setShowModal] = useState(false);
  const [editWaterIntake, setEditWaterIntake] = useState(null);
  /////////
  // console.log('todaytodaytoday =>', today);

  // const date = new Date();
  // const date = DateTime.now().setZone('Europe/Kiev');
  const now = new Date();
  const date = dateFns.sub(now, { minutes: -180 });
  // setDay(date);
  // const now = DateTime.now();
  // const date = now.setZone(now.offset - 180, { keepLocalTime: true });
  // const timezoneOffset = 'kyivTimeZone';
  // console.log('nowdate =>', date);

  const waterAmount = 500;

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  //, timezoneOffset: '+0300'
  const addWater = () => {
    const body = { date, waterAmount };
    dispatch(addWaterThunk(body));
  };
  useEffect(() => {
    // dispatch(getWaterThunk());
    // dispatch(getWaterDayThunk());
  }, [dispatch]);

  const dayWaterList = useSelector(selectStateWaterDayList);

  const selectDay = useSelector(selectSelectDay);
  const headerSelect = selectDay.slice(8, 10).toString();
  const selMonth = useSelector(selectSelectMonth);

  const dateZzZ = selMonth + '-01';
  let num = dateZzZ;
  console.log('2222222222222', num);
  const month = dateFns.format(dateZzZ, formatOfManth);
  console.log('111111111111111111111111', month);
  // const formattedDate = datesss.toLocaleString({
  //   month: 'long',
  //   day: '2-digit',
  // });
  // console.log('formattedDate', datesss);
  // console.log('selectDay =>', selectDay.slice(0, 10));
  // setDay(selectDay.slice(0, 10));
  // let selMonth = '';
  // if (!selectDay) {
  //   selMonth = dateFns.format(selectDay.slice(0, 10), formatOfManth);
  //   return selMonth;
  // }

  // const selYear = !selectDay
  //   ? dateFns.format(selectDay.slice(0, 10), formatOfYear)
  //   : date;
  // const selDay = dateFns.format(selectDay.slice(0, 10), formatOfDay);
  const todayDay = format(new Date(), 'yyyy-MM-dd');

  // const sDay = format(selMonth, 'MMMM');
  // console.log('toString', sDay);
  // console.log('selectDay', selectDay.slice(0, 10).toString());
  ///////////////+

  const handleEditWaterIntake = (waterIntake) => {
    setEditWaterIntake(waterIntake);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setEditWaterIntake(null);
  };
  ////////////////+
  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      <TodayWaterListBox>
        <Header>
          {selectDay.slice(0, 10).toString() !== todayDay.toString()
            ? `${headerSelect}  ${month}`
            : 'Today'}
        </Header>
        {/* <Header>{today && dayWaterList[0].date}</Header> */}
        <AddWaterBox>
          {dayWaterList.length ? (
            <DayDrinkBox>
              {dayWaterList.map(({ _id, waterAmount, date }, index) => (
                <WaterAmountBox key={index}>
                  <IconWrapper>
                    <use href={`${sprite}#icon-glas-water`} />
                  </IconWrapper>
                  <WaterAmount>{waterAmount} ml</WaterAmount>
                  <WaterAmountTime>{date.slice(11, 16)}</WaterAmountTime>
                  <IconWrapperStr
                    onClick={() => {
                      dispatch(changeWaterThunk({ _id, waterAmount, date }));
                      dispatch(getWaterThunk());
                      handleEditWaterIntake({ _id, waterAmount, date });
                    }}
                  >
                    <use href={`${sprite}#icon-pencil-square`} />
                  </IconWrapperStr>
                  <IconWrapperTrash
                    onClick={() => {
                      dispatch(delWaterThunk(_id));
                      // dispatch(getWaterDayThunk());
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
        {showModal && (
          <WaterModal
            waterIntakeId={editWaterIntake?._id}
            initialValue={editWaterIntake?.waterAmount}
            initialTime={editWaterIntake?.date.slice(11, 16)}
            onSave={(updatedAmount, updatedTime) => {
              dispatch(
                changeWaterThunk({
                  _id: editWaterIntake._id,
                  waterAmount: updatedAmount,
                  date: updatedTime,
                })
              );
              setShowModal(false);
              setEditWaterIntake(null);
            }}
            onClose={handleCloseModal}
            editMode
          />
        )}
      </TodayWaterListBox>
    </>
  );
};

export default TodayWaterList;
