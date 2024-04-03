import { useState } from 'react';
import sprite from '../../assets/img/sprite.svg';
import {
  ModalNorma,
  Title,
  DescriptionDef,
  DescriptionTitle,
  Form,
  Label,
  Input,
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
} from './DailyNormaModal.styled';

function DailyNormaModal({ onClose }) {
  const [gender, setGender] = useState('girl');
  const [weight, setWeight] = useState('0');
  const [activityTime, setActivityTime] = useState('0');
  const [waterIntake, setWaterIntake] = useState(0.0);
  const [plannedIntake, setPlannedIntake] = useState('0');

  const calculateWaterIntake = (gender, weight, activityTime) => {
    let intake;
    if (gender === 'girl') {
      intake = weight * 0.03 + activityTime * 0.4;
    } else {
      intake = weight * 0.04 + activityTime * 0.6;
    }
    setWaterIntake(intake.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateWaterIntake(gender, weight, activityTime);
    // Here can add the code to send the data to the backend
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalNorma>
        <NormaContainer>
          <Title>My daily norma</Title>
          <CloseBtn onClick={onClose}>
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
                <Input
                  type="radio"
                  value="girl"
                  checked={gender === 'girl'}
                  onChange={() => {
                    setGender('girl');
                    calculateWaterIntake('girl', weight, activityTime);
                  }}
                />
                <GenTitle>For woman</GenTitle>
                <Input
                  className="radio_input"
                  type="radio"
                  value="man"
                  checked={gender === 'man'}
                  onChange={() => {
                    setGender('man');
                    calculateWaterIntake('man', weight, activityTime);
                  }}
                />
                <GenTitle>For man</GenTitle>
              </LabelGen>
              <Label>
                Your weight in kilograms:
                <InputValue
                  type="number"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    calculateWaterIntake(gender, e.target.value, activityTime);
                  }}
                  required
                />
              </Label>
              <Label>
                The time of active participation in sports or other activities
                with a high physical load in hours:
                <InputValue
                  type="number"
                  value={activityTime}
                  onChange={(e) => {
                    setActivityTime(e.target.value);
                    calculateWaterIntake(gender, weight, e.target.value);
                  }}
                  required
                />
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
                value={plannedIntake}
                onChange={(e) => setPlannedIntake(e.target.value)}
                required
              />
            </Label>
            <Button type="submit">Save</Button>
          </Form>
        </NormaContainer>
      </ModalNorma>
    </Backdrop>
  );
}

export default DailyNormaModal;
