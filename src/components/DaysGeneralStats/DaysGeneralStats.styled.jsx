import styled from '@emotion/styled';

export const DaysGeneralStatsModal = styled.div`
  border-radius: 10px;
  padding: 24px 13px;
  width: 280px;
  height: 188px;
  box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
  background: var(--primery-color-white);

  position: absolute;
  top: 80%;
  left: 45%;
  /* transform: translate(-50% -50%);
  width: 80%;
  max-width: 280px; */
`;
export const DaysList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const DaysListItem = styled.li`
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--primery-color-black);
  white-space: nowrap;
`;

export const DataListSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--primery-color-blue);
`;

export const DataSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: var(--primery-color-blue);
`;
