import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDayWaterStat } from '../../redux/water/waterSelectors';
import { addWaterThunk } from '../../redux/water/waterThunk';
import { Snackbar, Alert } from '@mui/material';
import {
  Backdrop,
  ModalContainer,
  HeaderAddModal,
  ModalTitle,
  CloseButton,
  ChooseValueText,
  AmountOfWaterText,
  WaterAmountControls,
  WaterAmountButton,
  WaterAmountInput,
  IconDispenser,
  TimeContainer,
  StyledSelect,
  EnterWaterValueText,
  WaterAmountInputManually,
  AddWaterAmountContainer,
  AddWaterAmount,
  SaveButton,
  IconWrapper
} from './AddWaterModal.styled';
import sprite from '../../assets/img/sprite.svg';
import * as dateFns from 'date-fns';

const formatTime = (date) => {
  const hours = dateFns.format(date, 'HH');
  const minutes = dateFns.format(date, 'mm');
  return `${hours}:${minutes}`;
};

const formatDate = (date) => {
    return dateFns.format(date, 'yyyy-MM-dd')
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

const AddWaterModal = ({ onClose }) => {
    const initialValue = 50;
    const [waterAmount, setWaterAmount] = useState(initialValue);

    const date = formatDate(useSelector(selectDayWaterStat).startDate);
    const [selectedTime, setSelectedTime] = useState(new Date());

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

    const handleIncrement = () => {
        setWaterAmount((prevAmount) => Number(prevAmount) + 50);
    };

    const handleDecrement = () => {
        setWaterAmount((prevAmount) => (Number(prevAmount) >= 50 ? Number(prevAmount) - 50 : 0));
    };

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const dispatch = useDispatch();

    const handleAddWater = () => {
        if (waterAmount === 0) {
            setOpenSnackBar(true);
            return;
        }
        
        dispatch(addWaterThunk({waterAmount, date: `${date}\'${formatTime(selectedTime)}`}));
        handleClose();
    };
    

    return (
        <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
            <ModalContainer isOpen={isOpen}>
                <HeaderAddModal>
                    <ModalTitle>Add water</ModalTitle>

                    <CloseButton onClick={handleClose}>
                        <IconWrapper>
                            <use href={`${sprite}#icon-close`} />
                        </IconWrapper>
                    </CloseButton>
                </HeaderAddModal>

                <div>
                    <ChooseValueText>Choose a value:</ChooseValueText>
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
                                value={formatTime(selectedTime)}
                                onChange={(e) => {
                                    const [hours, minutes] = e.target.value.split(':');
                                    const newDate = new Date();
                                    newDate.setHours(hours);
                                    newDate.setMinutes(minutes);
                                    setSelectedTime(newDate);
                                }}
                            >
                                <option value={formatTime(selectedTime)}>{formatTime(selectedTime)}</option>
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

                <AddWaterAmountContainer>
                    <AddWaterAmount>{waterAmount || '0'} ml</AddWaterAmount>
                    <SaveButton onClick={handleAddWater}>Save</SaveButton>
                </AddWaterAmountContainer>
            </ModalContainer>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={11000}
                onClose={() => setOpenSnackBar(false)}
            >
                <Alert
                    elevation={6} variant="filled" severity="error" onClose={() => setSnackbarOpen(false)}
                >
                    Water amount cannot be 0 ml
                </Alert>
            </Snackbar>
        </Backdrop>
    );
};

export default AddWaterModal;
