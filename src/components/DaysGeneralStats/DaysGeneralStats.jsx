import { useState, useEffect } from 'react';
import * as dateFns from 'date-fns';

import {
  DataListSpan,
  DataSpan,
  DaysGeneralStatsModal,
  DaysList,
  DaysListItem,
  TransparentOverlay,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectDayInfo, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && <TransparentOverlay onClick={handleClose} />}

      <DaysGeneralStatsModal isOpen={isOpen} onClick={onClose}>
        <DaysList>
          <DaysListItem>
            <DataListSpan>
              {selectDayInfo.date &&
                dateFns.format(selectDayInfo.date, 'dd, MMMM')}
            </DataListSpan>
          </DaysListItem>
          <DaysListItem>
            Daily norma:
            <DataSpan>
              {(selectDayInfo.date && `${selectDayInfo.events.waterRate} L`) ||
                '2 L'}
            </DataSpan>
          </DaysListItem>
          <DaysListItem>
            Fulfillment of the daily norm:
            <DataSpan>
              {(selectDayInfo.date && `${selectDayInfo.events.percent}%`) ||
                '0%'}
            </DataSpan>
          </DaysListItem>
          <DaysListItem>
            How many servings of water:
            <DataSpan>
              {(selectDayInfo.date &&
                `${selectDayInfo.events.numberRecords}`) ||
                '0'}
            </DataSpan>
          </DaysListItem>
        </DaysList>
      </DaysGeneralStatsModal>
    </>
  );
};

export default DaysGeneralStats;
