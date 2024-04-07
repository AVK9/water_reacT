import React, { useState, useEffect } from 'react';
import  TimeInput  from './timeInput';
import { saveWaterIntake, updateWaterIntake } from './waterIntakeAPI';
import { formatTime } from './timeInput';
import {
  Backdrop,
  ModalContainer,
  ModalTitle,
  PreviousIntakeText,
  IntakeValue,
  IntakeTime,
  WaterAmountControls,
  WaterAmountButton,
  WaterAmountInput,
  SaveButton,
  CloseButton,
  CorrectEnteredDataText,
  AmountOfWaterText,
  TimeInputContainer,
  EnterWaterValueText,
  EditedWaterAmountContainer,
  EditedWaterAmount,
  IconWrap,
  IconClose,
  IconDispenser,
  WaterAmountInputManually
} from './aboutWater.styled';
import sprite from '../../assets/img/sprite.svg';

const WaterModal = ({ initialValue = 0, initialTime, onSave, onClose, editMode, waterIntakeId }) => {
  const [waterAmount, setWaterAmount] = useState(initialValue);         
  const [selectedTime, setSelectedTime] = useState(initialTime || formatTime(new Date()));
 


useEffect(() => {
 
  const handleKeyDown = (event) => {  
    if (event.key === 'Escape') {
      onClose();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  
  return () => {
    document.removeEventListener('keydown', handleKeyDown); 
  };
}, [onClose]);

const handleIncrement = () => {
  setWaterAmount((prevAmount) => Number(prevAmount) + 50);
};

const handleDecrement = () => {
  setWaterAmount((prevAmount) => (Number(prevAmount) >= 50 ? Number(prevAmount) - 50 : 0));
};

const handleSave = async () => {
  try {
    let savedData;
    if (editMode && waterIntakeId) {
      savedData = await updateWaterIntake(waterIntakeId, waterAmount, selectedTime);
    } else {
      savedData = await saveWaterIntake(waterAmount, selectedTime);
    }
    onSave(savedData);
  } catch (error) {
    console.error('Error saving water intake:', error);
  }
};

  const handleClose = () => {
    onClose();
  };


  
  return (
    <>
      <Backdrop />
      <ModalContainer>
        <CloseButton onClick={handleClose}>
          <IconClose>
            <use href={`${sprite}#icon-close`} />
          </IconClose>
        </CloseButton>
        <ModalTitle>Edit the entered amount of water</ModalTitle>
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
        <AmountOfWaterText>Recording time:</AmountOfWaterText>
        <TimeInputContainer>
          <TimeInput initialTime={new Date()} />
        </TimeInputContainer>
        <EnterWaterValueText>Enter the value of the water used:</EnterWaterValueText>
        <WaterAmountInputManually
          value={waterAmount + ' ml' || '0'}
          onChange={(e) => {
            const newValue = parseInt(e.target.value.replace(/\D/g, ''));
            setWaterAmount(isNaN(newValue) || e.target.value === '' ? 0 : newValue);
          }}
        />
        <EditedWaterAmountContainer>
          <EditedWaterAmount>{waterAmount || '0'} ml</EditedWaterAmount>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </EditedWaterAmountContainer>
      </ModalContainer>
    </>
  );
}

export default WaterModal;