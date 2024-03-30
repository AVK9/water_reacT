import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableContainer = styled.div`
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-color-2);
  width: 544px;
  /* height: 332px; */
  height: 550px;
`;

export const MonthStatsTableContainer = styled.div`
  display: 'flex';
  justify-content: 'space-arround';
  margin: '1 rem 0';
`;

export const BtnMonthStep = styled.button`
  background-color: tomato;
  width: 50px;
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
