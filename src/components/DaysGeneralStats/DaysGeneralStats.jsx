import { useState, useEffect } from 'react';
import * as dateFns from 'date-fns';
import { useTranslation } from 'react-i18next';

import {
  DataListSpan,
  DataSpan,
  DaysGeneralStatsModal,
  DaysList,
  DaysListItem,
  TransparentOverlay,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectDayInfo, onClose }) => {
  const { t } = useTranslation();
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
            {t('Daily norma:')}:
            <DataSpan>
              {(selectDayInfo.date &&
                `${selectDayInfo.events.waterRate / 1000} L`) ||
                '2 L'}
            </DataSpan>
          </DaysListItem>
          <DaysListItem>
            {t('Fulfillment of the daily norm:')}:
            <DataSpan>
              {(selectDayInfo.date && `${selectDayInfo.events.percent}%`) ||
                '0%'}
            </DataSpan>
          </DaysListItem>
          <DaysListItem>
            {t('How many servings of water:')}:
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
