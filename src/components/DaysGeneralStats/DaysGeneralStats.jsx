import * as dateFns from 'date-fns';

import {
  DataSpan,
  DaysGeneralStatsModal,
  DaysList,
  DaysListItem,
} from './DaysGeneralStats.styled';

const formatOfYear = 'yyy';
const formatOfManth = 'MMM';
const formatOfManthDig = 'MM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

const DaysGeneralStats = (selectDate) => {
  ///
  console.log(selectDate.selectDate);
  return (
    <DaysGeneralStatsModal>
      <DaysList>
        <DaysListItem>
          {/* <DataListSpan>{selectDate && selectDate}</DataListSpan> */}
        </DaysListItem>
        <DaysListItem>
          Daily norma:
          <DataSpan>2 L</DataSpan>
        </DaysListItem>
        <DaysListItem>
          Fulfillment of the daily norm:
          <DataSpan>100%</DataSpan>
        </DaysListItem>
        <DaysListItem>
          How many servings of water:
          <DataSpan>6</DataSpan>
        </DaysListItem>
      </DaysList>
    </DaysGeneralStatsModal>
  );
};

export default DaysGeneralStats;
