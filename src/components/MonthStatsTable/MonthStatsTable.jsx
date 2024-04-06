import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateSelectDay } from '../../redux/water/waterThunk';
import { DateTime } from 'luxon';
import * as dateFns from 'date-fns';
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
  selectStateWaterDayList,
  selectStateWaterMonthList,
} from '../../redux/water/waterSelectors';
import {
  getWaterDayThunk,
  getWaterMonthThunk,
} from '../../redux/water/waterThunk';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfManthDig = 'MM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

const MonthStatsTable = () => {
  const [monthListWoter, setMonthListWoter] = useState('');
  const [selectDate, setSelectDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const dateTime = DateTime.now();
  console.log('dateTime :>> ', dateTime.c.month);

  const selectMonth = dateFns.format(selectDate, formatOfManthDig);
  const selectYear = dateFns.format(selectDate, formatOfYear);
  const selectDay = dateFns.format(selectDate, formatOfDay);

  console.log(selectDate);
  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(firstDay);
  const endDate = dateFns.lastDayOfWeek(lastDay);
  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day <= 6; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDate);

  const isToday = (day) => dateFns.isSameDay(day, today);
  const isSelectedDate = (day) => dateFns.isSameDay(day, selectDate);

  const dispatch = useDispatch();
  useEffect(() => {
    if (today) {
      dispatch(getWaterDayThunk(selectDate));
      dispatch(getWaterDayThunk(`${selectYear}-${selectMonth}-${selectDay}`));
    }
  }, [selectDate]);

  const tasks = [
    { id: 1, date: '2024-04-05', title: 'Task 1' },
    { id: 2, date: '2024-04-06', title: 'Task 2' },
    { id: 3, date: '2024-04-05', title: 'Task 3' },
    { id: 4, date: '2024-04-07', title: 'Task 4' },
  ];

  const daysInMonth = 30; // Задаємо кількість днів у місяці (можна взяти з Date API)
  const tasksByDay = Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(2024, 3, index + 1); // 2024-04-01, 2024-04-02, ...
    const formattedDate = date.toISOString().split('T')[0]; // Форматуємо дату у вигляді 'yyyy-mm-dd'
    console.log('formattedDate :>> ', formattedDate);
    const tasksForDay = tasks.filter((task) => task.date === formattedDate);
    return { date: formattedDate, tasks: tasksForDay };
  });

  console.log(tasksByDay);

  useEffect(() => {
    // dispatch(getWaterMonthThunk(`${selectYear}-${selectMonth}`));
    dispatch(getWaterMonthThunk(`${selectYear}-${selectMonth}`));
  }, [selectDate]);

  const monthListWater = useSelector(selectStateWaterMonthList);
  console.log(monthListWater);

  console.log('totalDate :>> ', totalDate);
  const tasksForDay222 = monthListWater.filter(
    (task) => task.dayOfMonth === totalDate
  );
  console.log('tasksForDay222 :>> ', tasksForDay222);

  return (
    <TableContainer>
      <TableHeaderBox>
        <MonthSpan>Month</MonthSpan>
        <MonthStatsControlBox>
          <BtnMonthBox
            onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}
          >
            <IconWrapper>
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
            <IconWrapper>
              <use href={`${sprite}#icon-chevron-left`} />
            </IconWrapper>
          </BtnMonthBox>
        </MonthStatsControlBox>
      </TableHeaderBox>
      <CalendarTab
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 0fr)',
          gap: '22px 4px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {weeks.map((week) => (
          <DayOfWeekSpan key={nanoid()}>
            {dateFns.format(week, formatOfWeek)}
          </DayOfWeekSpan>
        ))}
        {totalDate.map((date) => (
          <ContainerData key={nanoid()}>
            <CalendarData>
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
                  setSelectDate(date);
                }}
              >
                {dateFns.format(date, formatOfDay)}
              </span>
            </CalendarData>
            <PersentRateWoter>0%</PersentRateWoter>
          </ContainerData>
        ))}
      </CalendarTab>
    </TableContainer>
  );
};

export default MonthStatsTable;
