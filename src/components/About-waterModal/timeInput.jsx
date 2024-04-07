import React, { useState, useEffect } from 'react';
import { TimeContainer, StyledSelect } from './aboutWater.styled';


export const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getTimeOptions = (start, end, step = 5) => {
  const options = [];
  let currentTime = new Date(start);
  const endTime = new Date(end);

  while (currentTime <= endTime) {
    const timeString = formatTime(currentTime);
    options.push({ value: timeString, label: timeString });
    currentTime = new Date(currentTime.getTime() + step * 60000); 
  }

  return options;
};



const TimeInput = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (e) => {
    const [hours, minutes] = e.target.value.split(':');
    const newDate = new Date();
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    setSelectedTime(newDate);
  };

  const timeOptions = getTimeOptions(new Date(0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 23, 59, 0));


  return (
    <TimeContainer>
      <div>
        <StyledSelect
          id="time"
          value={formatTime(selectedTime)}
          onChange={handleTimeChange}
        >
          {timeOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </div>
    </TimeContainer>
  );
};

export default TimeInput;