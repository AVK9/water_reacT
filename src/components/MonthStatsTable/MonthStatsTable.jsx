import * as dateFns from 'date-fns';
import { useState } from 'react';
import {
  BtnMonthStep,
  Calendar,
  CalendarData,
  MonthStatsTableContainer,
  TableContainer,
  PersentRateWoter,
  ContainerData,
} from './MonthStatsTable.modal';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

const MonthStatsTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());
  const today = new Date();

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
    for (let day = 1; day <= 7; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDate);

  const isToday = (day) => dateFns.isSameDay(day, today);
  const isSelectedDate = (day) => dateFns.isSameDay(day, selectDate);

  return (
    <TableContainer>
      <MonthStatsTableContainer>
        <BtnMonthStep
          onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}
        >
          last
        </BtnMonthStep>
        <span>
          {dateFns.format(currentDate, formatOfManth)}
          {dateFns.format(currentDate, formatOfYear)}
        </span>
        <BtnMonthStep
          onClick={() => setCurrentDate(dateFns.addMonths(currentDate, 1))}
        >
          next
        </BtnMonthStep>
      </MonthStatsTableContainer>

      <div>Month</div>

      <Calendar
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '22px 20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {weeks.map((week) => (
          <span>{dateFns.format(week, formatOfWeek)}</span>
        ))}
        {totalDate.map((date) => (
          <ContainerData>
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
                onClick={() => setSelectDate(date)}
              >
                {dateFns.format(date, formatOfDay)}
              </span>
            </CalendarData>
            <PersentRateWoter>0%</PersentRateWoter>
          </ContainerData>
        ))}
      </Calendar>
    </TableContainer>
  );
};

export default MonthStatsTable;
