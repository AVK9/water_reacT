import styled from '@emotion/styled';

export const TransparentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DaysGeneralStatsModal = styled.div`
  border-radius: 10px;
  padding: 24px 13px;
  width: 280px;
  height: 188px;
  box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
  background: var(--primery-color-white);

  position: absolute;
  top: ${(props) => (props.isOpen ? '32px' : '-6px')};
  left: 0; */
  transform: translate(-50% -50%);
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.8s ease-in-out, top 0.5s ease-in-out;
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
