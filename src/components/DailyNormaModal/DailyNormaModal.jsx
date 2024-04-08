import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateWaterRateThunk } from '../../redux/auth/authThunk';

import sprite from '../../assets/img/sprite.svg';
import {
  ModalNorma,
  Title,
  DescriptionDef,
  DescriptionTitle,
  Form,
  Label,
  Button,
  ValueResult,
  Backdrop,
  CloseBtn,
  NormaContainer,
  WrapperDef,
  LabelRate,
  LabelDef,
  CalcTitle,
  LabelGen,
  ContainerForm,
  GenTitle,
  InputValue,
  LabelSpan,
  LabelAmount,
  LabelMuch,
  RadioInput,
  CustomRadio,
  CustomRadioInner,
  ErrorMessage,
} from './DailyNormaModal.styled';

function DailyNormaModal({ onClose, setDailyNorm }) {
  const [gender, setGender] = useState('girl');
  const [weight, setWeight] = useState('0.0');
  const [activityTime, setActivityTime] = useState('0');
  const [waterIntake, setWaterIntake] = useState(0.0);
  const [plannedIntake, setPlannedIntake] = useState('0.0');
  const [isOpen, setIsOpen] = useState(false);
  const [weightError, setWeightError] = useState('');
  const [activityTimeError, setActivityTimeError] = useState('');
  const [plannedIntakeError, setPlannedIntakeError] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    const keyValue = event.key;
    if (
      (!/\d/.test(keyValue) &&
        ![
          'Backspace',
          'Delete',
          'ArrowLeft',
          'ArrowRight',
          'Tab',
          'ArrowUp',
          'ArrowDown',
        ].includes(keyValue)) ||
      keyValue.toLowerCase() === 'e'
    ) {
      event.preventDefault();
    }
  };

  const calculateWaterIntake = (gender, weight, activityTime) => {
    let intake;
    if (gender === 'girl') {
      intake = weight * 0.03 + activityTime * 0.4;
    } else {
      intake = weight * 0.04 + activityTime * 0.6;
    }
    setWaterIntake(intake.toFixed(2));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!weight || !activityTime || weight === '0' || activityTime === '0') {
      if (!weight || weight === '0')
        setWeightError('Weight is a required field and cannot be zero');
      if (!activityTime || activityTime === '0')
        setActivityTimeError(
          'Activity time is a required field and cannot be zero'
        );
      return;
    }

    try {
      let intake =
        plannedIntake && parseFloat(plannedIntake) !== 0
          ? plannedIntake
          : waterIntake;
      await dispatch(updateWaterRateThunk(intake));
      if (typeof intake === 'string') {
        setDailyNorm(parseFloat(intake));
      } else if (typeof intake === 'number') {
        setDailyNorm(intake);
      } else {
        console.error('intake is not a number:', intake);
      }
      localStorage.setItem('dailyNorm', intake);
      handleClose();
    } catch (error) {
      console.error('Error during water rate update:', error);
    }
  };

  useEffect(() => {
    calculateWaterIntake(gender, weight, activityTime);
  }, [gender, weight, activityTime]);

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

  return (
    <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <ModalNorma isOpen={isOpen}>
        <NormaContainer>
          <Title>My daily norma</Title>
          <CloseBtn onClick={handleClose}>
            <svg>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </CloseBtn>
          <WrapperDef>
            <DescriptionDef>
              <LabelRate>For girl:</LabelRate>{' '}
              <LabelDef>V=(M*0,03) + (T*0,4)</LabelDef>
            </DescriptionDef>
            <DescriptionDef>
              <LabelRate>For man:</LabelRate>
              <LabelDef>V=(M*0,04) + (T*0,6)</LabelDef>
            </DescriptionDef>
          </WrapperDef>
          <DescriptionTitle>
            V is the volume of the water norm in liters per day, M is your body
            weight, T is the time of active sports, or another type of activity
            commensurate in terms of loads (in the absence of these, you must
            set 0)
          </DescriptionTitle>

          <Form onSubmit={handleSubmit}>
            <ContainerForm>
              <CalcTitle>Calculate your rate:</CalcTitle>
              <LabelGen>
                <RadioInput
                  type="radio"
                  id="girl"
                  value="girl"
                  checked={gender === 'girl'}
                  onChange={() => {
                    setGender('girl');
                    calculateWaterIntake('girl', weight, activityTime);
                  }}
                />
                <CustomRadio htmlFor="girl">
                  <CustomRadioInner
                    style={{ opacity: gender === 'girl' ? 1 : 0 }}
                  />
                </CustomRadio>
                <GenTitle>For woman</GenTitle>
                <RadioInput
                  id="man"
                  className="radio_input"
                  type="radio"
                  value="man"
                  checked={gender === 'man'}
                  onChange={() => {
                    setGender('man');
                    calculateWaterIntake('man', weight, activityTime);
                  }}
                />
                <CustomRadio htmlFor="man">
                  <CustomRadioInner
                    style={{ opacity: gender === 'man' ? 1 : 0 }}
                  />
                </CustomRadio>
                <GenTitle>For man</GenTitle>
              </LabelGen>
              <Label>
                Your weight in kilograms:
                <InputValue
                  type="number"
                  step="0.1"
                  min="0"
                  value={weight}
                  onChange={(e) => {
                    if (e.target.value > 300) {
                      setWeightError(
                        'Weight must be less than or equal to 300'
                      );
                      setWeight('');
                    } else if (e.target.value === '') {
                      setWeightError('Weight is a required field');
                      setWeight('');
                    } else {
                      setWeightError('');
                      setWeight(e.target.value);
                      calculateWaterIntake(
                        gender,
                        e.target.value,
                        activityTime
                      );
                    }
                  }}
                  onKeyDown={handleKeyPress}
                  required
                />
                {weightError && <ErrorMessage>{weightError}</ErrorMessage>}
              </Label>
              <Label>
                The time of active participation in sports or other activities
                with a high physical load in hours:
                <InputValue
                  type="number"
                  min="0"
                  value={activityTime}
                  onChange={(e) => {
                    if (e.target.value > 12) {
                      setActivityTimeError(
                        'Activity time must be less than or equal to 12'
                      );
                      setActivityTime('');
                    } else {
                      setActivityTimeError('');
                      setActivityTime(e.target.value);
                      calculateWaterIntake(gender, weight, e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyPress}
                  required
                />
                {activityTimeError && (
                  <ErrorMessage>{activityTimeError}</ErrorMessage>
                )}
              </Label>
              <LabelAmount>
                <LabelSpan>
                  The required amount of water in liters per day:
                </LabelSpan>
                <ValueResult>
                  {parseFloat(waterIntake).toFixed(1)} L{' '}
                </ValueResult>
              </LabelAmount>
            </ContainerForm>
            <Label>
              <LabelMuch>
                Write down how much water you will drink in liters:
              </LabelMuch>
              <InputValue
                type="number"
                step="0.1"
                min="0"
                value={plannedIntake}
                onChange={(e) => {
                  if (e.target.value > 15) {
                    setPlannedIntakeError(
                      'Rate must be less than or equal to 15'
                    );
                    setPlannedIntake('');
                  } else {
                    setPlannedIntakeError('');
                    setPlannedIntake(e.target.value);
                  }
                }}
                onKeyDown={handleKeyPress}
                required
              />
            </Label>
            {plannedIntakeError && (
              <ErrorMessage>{plannedIntakeError}</ErrorMessage>
            )}
            <Button type="submit">Save</Button>
          </Form>
        </NormaContainer>
      </ModalNorma>
    </Backdrop>
  );
}

export default DailyNormaModal;
