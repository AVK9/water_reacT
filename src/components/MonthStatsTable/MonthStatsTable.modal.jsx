import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableContainer = styled.div`
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-color-2);
  width: 544px;
  /* height: 332px; */
  height: 550px;
`;
export const TableHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonthSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: var(--primery-color-black);
`;

export const MonthYearSpan = styled.span`
  margin-left: 5px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--primery-color-blue);
`;
export const CarrentMonthBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  background-color: blue;
`;
export const IconWrapper = styled.svg`
  width: 14px;
  height: 14px;
  fill: #407bff;
  background-color: red;
  /* display: inline-block; */
`;
export const BtnMonthBox = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: black;
  width: 30px;
  height: 10px;
`;

export const BtnMonthStep = styled.button`
  /* width: 50px; */
  border: none;
`;
export const DayOfWeekSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* text-align: center; */
  color: var(--secondary-color-4);
`;
export const MonthStatsTableContainer = styled.div`
  /* display: block; */
  display: 'flex';
  /* flex-direction: row; */
  width: 300px;
  /* display: nowrap; */
  justify-content: 'space-arround';
  /* margin: '1 rem 0'; */
  background-color: #06bd06;
`;
export const Calendar = styled.div`
  display: 'grid';
  grid-template-columns: 'repeat(7, 1fr)';
  gap: '1rem';
`;
export const CalendarData = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--primery-color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PersentRateWoter = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: var(--secondary-color-4);
`;

export const ContainerData = styled.div`
  width: 34px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StyledLink = styled(Link)`
  /* padding: 20px; */
`;
