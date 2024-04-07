import {
  DataListSpan,
  DataSpan,
  DaysGeneralStatsModal,
  DaysList,
  DaysListItem,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = () => {
  ///

  return (
    <DaysGeneralStatsModal>
      <DaysList>
        <DaysListItem>
          <DataListSpan>23, april</DataListSpan>
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
