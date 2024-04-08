import { useState, useEffect } from 'react';
import * as dateFns from 'date-fns';

import {
  DataListSpan,
  DataSpan,
  DaysGeneralStatsModal,
  DaysList,
  DaysListItem,
  OverlayDeleteModal,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = (selectDayInfo, onClose) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', close);

    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  return (
    <OverlayDeleteModal isOpen={isOpen} onClick={handleBackdropClick}>
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
    </OverlayDeleteModal>
  );
};

export default DaysGeneralStats;
