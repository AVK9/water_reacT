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
  DrinkinfContolBox,
  DrinkinfInfoBox,
} from './TodayWaterList.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';
import { format } from 'date-fns';

import {
  selectError,
  selectLoading,
  selectSelectDay,
  selectSelectMonth,
  // selectStateWaterDayList,
  selectVisibleDrinking,
} from '../../redux/water/waterSelectors';
// import { Loader } from '../Loader/Loader';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import EditWaterModal from '../EditWaterModal/EditWaterModal';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal';
import { Loader } from '../Loader/Loader';

const formatOfManth = 'MMMM';

const TodayWaterList = () => {
  const [isModaAddWaterOpen, setIsModalAddWaterOpen] = useState(false);
  const handleOpenModalAddWater = () => setIsModalAddWaterOpen(true);
  const handleCloseModalAddWater = () => setIsModalAddWaterOpen(false);

  const [isModaEditWaterOpen, setIsModalEditWaterOpen] = useState(false);
  const handleOpenModalEditWater = () => setIsModalEditWaterOpen(true);
  const handleCloseModalEditWater = () => setIsModalEditWaterOpen(false);
  

  const [isDeleteWaterModal, setDeleteWaterModal] = useState(false);
  const [selectItem, setSelectedItem] = useState(null);

  const handleOpenModalDell = (_id) => {
    setSelectedItem(_id);
    setDeleteWaterModal(true);
  };
  const handleCloseModalDell = () => setDeleteWaterModal(false);

  ///////+
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

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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
  };
  ////////////////+
  return (
    <>
      {error && <p>Error: {error}</p>}
      <TodayWaterListBox>
        <Header>
          {selectDay.slice(0, 10).toString() !== todayDay.toString()
            ? `${headerSelect}  ${month}`
            : 'Today'}
        </Header>
        <AddWaterBox>
          {dayWaterList.length ? (
            <DayDrinkBox>
              {dayWaterList.map(({ _id, waterAmount, date }, index) => (
                <WaterAmountBox key={index}>
                  <DrinkinfInfoBox>
                    <IconWrapper>
                      <use href={`${sprite}#icon-glas-water`} />
                    </IconWrapper>
                    <WaterAmount>{waterAmount} ml</WaterAmount>
                    <WaterAmountTime>{date.slice(11, 16)}</WaterAmountTime>
                  </DrinkinfInfoBox>
                  <DrinkinfContolBox>
                    <IconWrapperStr
                      onClick={() => {
                        handleOpenModalEditWater();
                        handleEditWaterIntake({ _id, waterAmount, date });
                      }}
                    >
                      <use href={`${sprite}#icon-pencil-square`} />
                    </IconWrapperStr>
                    <IconWrapperTrash onClick={() => handleOpenModalDell(_id)}>
                      <use href={`${sprite}#icon-trash`} />
                    </IconWrapperTrash>
                  </DrinkinfContolBox>
                </WaterAmountBox>
              ))}
            </DayDrinkBox>
          ) : (
            <DayDrinkBox>
              {loading && <Loader />}
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
          <BtnAddWater onClick={handleOpenModalAddWater}>
            + Add Water
          </BtnAddWater>
        </AddWaterBox>
        {isModaEditWaterOpen &&
          <EditWaterModal
            waterIntakeId={editWaterIntake?._id}
            initialValue={editWaterIntake?.waterAmount}
            initialTime={editWaterIntake?.date.slice(11, 16)}
            onTimeChange
            onClose={handleCloseModalEditWater}
            editMode
          />
        }
        {isModaAddWaterOpen && (
          <AddWaterModal onClose={handleCloseModalAddWater} />
        )}
        {isDeleteWaterModal && (
          <DeleteWaterModal onClose={handleCloseModalDell} delId={selectItem} />
        )}
      </TodayWaterListBox>
    </>
  );
};

export default TodayWaterList;
