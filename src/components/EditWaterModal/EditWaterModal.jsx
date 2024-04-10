import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeWaterThunk, getWaterThunk } from '../../redux/water/waterThunk';
import {
  Backdrop,
  ModalContainer,
  HeaderEditModal,
  ModalTitle,
  CloseButton,
  IconClose,
  PreviousIntakeText,
  IconWrap,
  IntakeValue,
  IntakeTime,
  CorrectEnteredDataText,
  AmountOfWaterText,
  WaterAmountControls,
  WaterAmountButton,
  WaterAmountInput,
  IconDispenser,
  TimeContainer,
  StyledSelect,
  EnterWaterValueText,
  WaterAmountInputManually,
  EditedWaterAmountContainer,
  EditedWaterAmount,
  SaveButton,
} from './EditWaterModal.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';

const formatTime = (date) => {
  const hours = dateFns.format(date, 'HH');
  const minutes = dateFns.format(date, 'mm');
  return `${hours}:${minutes}`;
};

const getTimeOptions = (start, end, step = 5) => {
  const options = [];
  let currentTime = start;
  const endTime = end;

  while (currentTime <= endTime) {
    const timeString = formatTime(currentTime);
    options.push({ value: timeString, label: timeString });
    currentTime = dateFns.add(currentTime, { minutes: step });
  }

  return options;
};

const EditWaterModal = ({ initialValue = 0, initialTime, onClose, editMode, waterIntakeId }) => {
  const [waterAmount, setWaterAmount] = useState(initialValue);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const now = new Date();
  const adjustedTime = dateFns.sub(now, { minutes: -180 });

  const timeOptions = getTimeOptions(new Date(0, 0, 0, 0, 0), new Date(0, 0, 0, 23, 59), 5);

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

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setWaterAmount((prevAmount) => Number(prevAmount) + 50);
  };

  const handleDecrement = () => {
    setWaterAmount((prevAmount) => (Number(prevAmount) >= 50 ? Number(prevAmount) - 50 : 0));
  };

  const handleSave = async () => {
    try {
      if (editMode && waterIntakeId) {
        dispatch(changeWaterThunk({ _id: waterIntakeId, waterAmount, date: dateFns.sub(selectedTime, { minutes: -180 }) || adjustedTime }));
      }
      dispatch(getWaterThunk());
      handleClose();
    } catch (error) {
      console.error('Error saving water intake:', error);
    }
  };

  return (
    <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <ModalContainer isOpen={isOpen}>
        <HeaderEditModal>
          <ModalTitle>Edit the entered amount of water</ModalTitle>

          <CloseButton onClick={handleClose}>
            <IconClose>
              <use href={`${sprite}#icon-close`} />
            </IconClose>
          </CloseButton>
        </HeaderEditModal>

        {initialValue ? (
          <PreviousIntakeText>
            <IconWrap>
              <use href={`${sprite}#icon-glas-water`} />
            </IconWrap>
            <IntakeValue>{initialValue + 'ml'}</IntakeValue>
            <IntakeTime>{initialTime}</IntakeTime>
          </PreviousIntakeText>
        ) : (
          <PreviousIntakeText>No notes yet</PreviousIntakeText>
        )}
        <div>
          <CorrectEnteredDataText>Correct entered data:</CorrectEnteredDataText>
          <AmountOfWaterText>Amount of water:</AmountOfWaterText>

          <WaterAmountControls>
            <WaterAmountButton onClick={handleDecrement}>
              <IconDispenser>
                <use href={`${sprite}#icon-minus-small`} />
              </IconDispenser>
            </WaterAmountButton>

            <WaterAmountInput value={waterAmount + ' ml'} readOnly={true} />

            <WaterAmountButton onClick={handleIncrement}>
              <IconDispenser>
                <use href={`${sprite}#icon-plus-small`} />
              </IconDispenser>
            </WaterAmountButton>
          </WaterAmountControls>
        </div>

        <div>
          <AmountOfWaterText>Recording time:</AmountOfWaterText>

          <TimeContainer>
            <div>
              <StyledSelect
                id="time"
                value={initialTime}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(':');
                  const newDate = new Date();
                  newDate.setHours(hours);
                  newDate.setMinutes(minutes);
                  setSelectedTime(newDate);
                }}
              >
              
                <option value={formatTime(now)}>{formatTime(now)}</option>
                {timeOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </StyledSelect>
            </div>
          </TimeContainer>
        </div>
        
        <div>
          <EnterWaterValueText>Enter the value of the water used:</EnterWaterValueText>
          <WaterAmountInputManually
            value={waterAmount + ' ml' || '0'}
            onChange={(e) => {
              const newValue = parseInt(e.target.value.replace(/\D/g, ''));
              setWaterAmount(isNaN(newValue) || e.target.value === '' ? 0 : newValue);
            }}
          />
        </div>
          
        <EditedWaterAmountContainer>
          <EditedWaterAmount>{waterAmount || '0'} ml</EditedWaterAmount>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </EditedWaterAmountContainer>
      </ModalContainer>
    </Backdrop>
  );
};

export default EditWaterModal;
