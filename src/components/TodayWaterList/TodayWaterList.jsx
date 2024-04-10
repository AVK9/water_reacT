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
  IconBox,
  IconBoxTrash,
} from './TodayWaterList.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';
import { format } from 'date-fns';

import {
  selectError,
  selectLoading,
  selectSelectDay,
  selectSelectMonth,
  selectStateWaterDayList,
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

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    // dispatch(getWaterThunk());
    // dispatch(getWaterDayThunk());
  }, [dispatch]);

  const dayWaterList = useSelector(selectStateWaterDayList);
  // const dayWaterList = useSelector(selectVisibleDrinking);

  const selectDay = useSelector(selectSelectDay);
  const headerSelect = selectDay.slice(8, 10).toString();
  const selMonth = useSelector(selectSelectMonth);
  const fullMonth = selMonth + '-01';
  const month = dateFns.format(fullMonth, formatOfManth);

  const now = new Date();
  const date = dateFns.sub(now, { minutes: -180 });
  const todayDay = format(date, 'yyyy-MM-dd');

  console.log('selectDayselectDay', selectDay);
  console.log('selMonthselMonthselMonth', selMonth);
  ///////////////+

  const handleEditWaterIntake = (waterIntake) => {
    setEditWaterIntake(waterIntake);
  };
  ////////////////+
  const clickDate = useSelector((state) => state.time.stateHandleDate);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <TodayWaterListBox>
        <Header>{clickDate ? format(clickDate, 'dd, MMMM') : 'Today'}</Header>
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
                    <IconBox>
                      {' '}
                      <IconWrapperStr
                        onClick={() => {
                          handleOpenModalEditWater();
                          handleEditWaterIntake({ _id, waterAmount, date });
                        }}
                      >
                        <use href={`${sprite}#icon-pencil-square`} />
                      </IconWrapperStr>
                    </IconBox>
                    <IconBoxTrash>
                      <IconWrapperTrash
                        onClick={() => handleOpenModalDell(_id)}
                      >
                        <use href={`${sprite}#icon-trash`} />
                      </IconWrapperTrash>
                    </IconBoxTrash>
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
          <BtnAddWater onClick={handleOpenModalAddWater}>
            + Add Water
          </BtnAddWater>
        </AddWaterBox>
        {isModaEditWaterOpen && (
          <EditWaterModal
            waterIntakeId={editWaterIntake?._id}
            initialValue={editWaterIntake?.waterAmount}
            initialTime={editWaterIntake?.date.slice(11, 16)}
            onClose={handleCloseModalEditWater}
            editMode
          />
        )}
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
