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
  getWaterThunk,
} from '../../redux/water/waterThunk';
import {
  selectError,
  selectLoading,
  selectSelectDay,
  selectSelectMonth,
  // selectStateWaterDayList,
  selectVisibleDrinking,
} from '../../redux/water/waterSelectors';
// import { Loader } from '../Loader/Loader';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal';

const formatOfManth = 'MMMM';

const TodayWaterList = () => {
  const [isDeleteWaterModal, setDeleteWaterModal] = useState(false);
  const [selectItem, setSelectedItem] = useState(null);

  const handleOpenModalDell = (_id) => {
    setSelectedItem(_id);
    setDeleteWaterModal(true);
  };
  const handleCloseModalDell = () => setDeleteWaterModal(false);

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

  const addWater = () => {
    const body = { date, waterAmount };
    dispatch(addWaterThunk(body));
  };
  useEffect(() => {
    // dispatch(getWaterThunk());
    // dispatch(getWaterDayThunk());
  }, [dispatch]);

  // const dayWaterList = useSelector(selectStateWaterDayList);
  const dayWaterList = useSelector(selectVisibleDrinking);

  const selectDay = useSelector(selectSelectDay);
  const headerSelect = selectDay.slice(8, 10).toString();
  const selMonth = useSelector(selectSelectMonth);
  const fullMonth = selMonth + '-01';
  const month = dateFns.format(fullMonth, formatOfManth);

  const todayDay = format(new Date(), 'yyyy-MM-dd');

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
                    onClick={
                      () => handleOpenModalDell(_id)
                      // dispatch(delWaterThunk(_id));
                      // dispatch(getWaterDayThunk());
                    }
                  >
                    <use href={`${sprite}#icon-trash`} />
                  </IconWrapperTrash>
                </WaterAmountBox>
              ))}
            </DayDrinkBox>
          ) : (
            <DayDrinkBox>
              <p>No water</p>
            </DayDrinkBox>
            // <Loader /> &&
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
        {isDeleteWaterModal && (
          <DeleteWaterModal onClose={handleCloseModalDell} delId={selectItem} />
        )}
      </TodayWaterListBox>
    </>
  );
};

export default TodayWaterList;
