import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import * as dateFns from 'date-fns';
import { addMonths, subMonths, format } from 'date-fns';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  CalendarTab,
  CalendarData,
  MonthStatsControlBox,
  TableContainer,
  PersentRateWoter,
  ContainerData,
  DayOfWeekSpan,
  MonthSpan,
  TableHeaderBox,
  MonthYearSpan,
  CarrentMonthBox,
  IconWrapper,
  BtnMonthBox,
} from './MonthStatsTable.styled';
import sprite from '../../assets/img/sprite.svg';
import {
  selectError,
  selectLoading,
  selectStateWaterMonthList,
} from '../../redux/water/waterSelectors';
import {
  getWaterDayThunk,
  getWaterMonthThunk,
} from '../../redux/water/waterThunk';
import { Loader } from '../Loader/Loader';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { updateStateHandleDate } from '../../redux/action/action.js';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfManthDig = 'MM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

const MonthStatsTable = () => {
  const dispatch = useDispatch();

  const [selectDateUse, setSelectDateUse] = useState(new Date());
  const [selectDayInfo, setSelectDayInfo] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const [isWaterModalRate, setWaterModalRate] = useState(false);

  const handleOpenModalRate = () => setWaterModalRate(true);
  const handleCloseModalRate = () => setWaterModalRate(false);

  const dateTime = DateTime.now();
  console.log('dateTime :>> ', dateTime.c.month);

  const selectMonth = dateFns.format(selectDateUse, formatOfManthDig);
  const selectYear = dateFns.format(selectDateUse, formatOfYear);
  const selectDay = dateFns.format(selectDateUse, formatOfDay);

  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(firstDay);
  const endDate = dateFns.lastDayOfWeek(lastDay);
  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const firstDayNextMonth = dateFns.startOfMonth(addMonths(currentDate, 1));
  const lastDayNextMonth = dateFns.lastDayOfMonth(addMonths(currentDate, 1));
  const startDateNext = dateFns.startOfWeek(firstDayNextMonth);
  const endDateNext = dateFns.lastDayOfWeek(lastDayNextMonth);

  const firstPreviousMonth = dateFns.startOfMonth(subMonths(currentDate, 1));
  const lastDayPreviousMonth = dateFns.lastDayOfMonth(
    subMonths(currentDate, 1)
  );
  const startDateSub = dateFns.startOfWeek(firstPreviousMonth);
  const endDateSub = dateFns.lastDayOfWeek(lastDayPreviousMonth);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day <= 6; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDate);

  const isToday = (day) => dateFns.isSameDay(day, today);
  const isSelectedDate = (day) => dateFns.isSameDay(day, selectDateUse);

  const calendrShablon = totalDate.map((day) => {
    const data = `${dateFns.format(day, formatOfDay)}-${dateFns.format(
      day,
      formatOfManthDig
    )}`;
    return {
      id: data,
      date: day,
      events: {
        waterRate: '0',
        percent: '0',
        numberRecords: '0',
      },
    };
  });

  const monthListWater = useSelector(selectStateWaterMonthList);
  console.log('monthListWater', monthListWater);
  const updatedCalendar = calendrShablon.map((day) => {
    const matchingWater = monthListWater.find(
      (task) => `${task.dayOfMonth.toString()}-${selectMonth}` === day.id
    );
    if (matchingWater) {
      return {
        ...day,
        events: {
          ...day.events,
          waterRate: matchingWater.waterRate,
          percent:
            matchingWater.percent > 100
              ? Math.round(matchingWater.percent / 1000)
              : Math.round(matchingWater.percent),
          numberRecords: matchingWater.numberRecords,
        },
      };
    } else {
      return day;
    }
  });

  useEffect(() => {
    if (today) {
      dispatch(getWaterDayThunk(`${selectYear}-${selectMonth}-${selectDay}`));
    }
    const start = dateFns.format(startDate, 'yyyy-MM-dd');
    const end = dateFns.format(endDate, 'yyyy-MM-dd');
    const bady = { start, end };
    dispatch(getWaterMonthThunk(bady));
  }, [dispatch]);

  const updateMonthNext = () => {
    const start = dateFns.format(startDateNext, 'yyyy-MM-dd');
    const end = dateFns.format(endDateNext, 'yyyy-MM-dd');
    const bady = { start, end };
    dispatch(getWaterMonthThunk(bady));
  };

  const updateMonthSub = () => {
    const start = dateFns.format(startDateSub, 'yyyy-MM-dd');
    const end = dateFns.format(endDateSub, 'yyyy-MM-dd');
    const bady = { start, end };
    dispatch(getWaterMonthThunk(bady));
  };

  const updateSelectDay = (date) => {
    const click = dateFns.sub(date, { minutes: -180 });
    const todayDay = dateFns.format(click, 'yyyy-MM-dd');
    dispatch(updateStateHandleDate(todayDay));
    dispatch(getWaterDayThunk(todayDay));
  };

  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      <TableContainer>
        <TableHeaderBox>
          <MonthSpan>Month</MonthSpan>
          <MonthStatsControlBox>
            <BtnMonthBox
              onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}
            >
              <IconWrapper onClick={updateMonthSub}>
                <use href={`${sprite}#icon-chevron-right`} />
              </IconWrapper>
            </BtnMonthBox>
            <CarrentMonthBox>
              <MonthYearSpan>
                {dateFns.format(currentDate, formatOfManth)},
              </MonthYearSpan>
              <MonthYearSpan>
                {dateFns.format(currentDate, formatOfYear)}
              </MonthYearSpan>
            </CarrentMonthBox>
            <BtnMonthBox
              onClick={() => setCurrentDate(dateFns.addMonths(currentDate, 1))}
            >
              <IconWrapper onClick={updateMonthNext}>
                <use href={`${sprite}#icon-chevron-left`} />
              </IconWrapper>
            </BtnMonthBox>
          </MonthStatsControlBox>
        </TableHeaderBox>
        {updatedCalendar.length ? (
          <CalendarTab
            style={{
              // paddingLeft: 25,
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '10px 4px',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {weeks.map((week) => (
              <DayOfWeekSpan key={nanoid()}>
                {dateFns.format(week, formatOfWeek)}
              </DayOfWeekSpan>
            ))}
            {updatedCalendar.map(
              ({ id, date, events: { percent, waterRate, numberRecords } }) => (
                <ContainerData key={id}>
                  <CalendarData onClick={handleOpenModalRate}>
                    <span
                      style={{
                        color: !dateFns.isSameMonth(date, currentDate)
                          ? 'gray'
                          : isSelectedDate(date)
                          ? 'blue'
                          : isToday(date)
                          ? 'green'
                          : dateFns.isWeekend(date, currentDate)
                          ? 'red'
                          : '',
                      }}
                      onClick={() => {
                        setSelectDayInfo({
                          id,
                          date,
                          events: { percent, waterRate, numberRecords },
                        });
                        setSelectDateUse(date);
                        updateSelectDay(date);
                        // handleOpenModalRate();
                      }}
                    >
                      {dateFns.format(date, formatOfDay)}
                    </span>
                  </CalendarData>
                  <PersentRateWoter>{percent} %</PersentRateWoter>
                </ContainerData>
              )
            )}
          </CalendarTab>
        ) : (
          <Loader /> || <p>No water</p>
        )}
        {isWaterModalRate && (
          <DaysGeneralStats
            selectDayInfo={selectDayInfo}
            onClose={handleCloseModalRate}
          />
        )}
      </TableContainer>
    </>
  );
};

export default MonthStatsTable;
