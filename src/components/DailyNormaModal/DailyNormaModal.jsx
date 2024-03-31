import { useState } from 'react';
import {
  Modal,
  Title,
  Description,
  Form,
  Label,
  Input,
  Button,
  ValueResult,
  Backdrop,
  CloseBtn,
} from './DailyNormaModal.styled';

function DailyNormaModal({ onClose }) {
  const [gender, setGender] = useState('girl');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [waterIntake, setWaterIntake] = useState(0.0);
  const [plannedIntake, setPlannedIntake] = useState('');

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
      <Modal>
        <CloseBtn
          onClick={() => {
            onClose();
          }}
        >
          <svg width={24} height={24}>
            <use href="src/assets/img/sprite.svg#icon-close"></use>
          </svg>
        </CloseBtn>
        <Title>My daily norma</Title>
        <Description>For girl: V=(M*0,03) + (T*0,4)</Description>
        <Description>For man: V=(M*0,04) + (T*0,6)</Description>
        <Description>
          V is the volume of the water norm in liters per day, M is your body
          weight, T is the time of active sports, or another type of activity
          commensurate in terms of loads (in the absence of these, you must set
          0)
        </Description>
        <Form onSubmit={handleSubmit}>
          <Label>
            For girl
            <Input
              type="radio"
              value="girl"
              checked={gender === 'girl'}
              onChange={() => {
                setGender('girl');
                calculateWaterIntake('girl', weight, activityTime);
              }}
            />
          </Label>
          <Label>
            For man
            <Input
              type="radio"
              value="man"
              checked={gender === 'man'}
              onChange={() => {
                setGender('man');
                calculateWaterIntake('man', weight, activityTime);
              }}
            />
          </Label>
          <Label>
            Your weight in kilograms:
            <Input
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
            The time of active participation in sports or other activities with
            a high physical load:
            <Input
              type="number"
              value={activityTime}
              onChange={(e) => {
                setActivityTime(e.target.value);
                calculateWaterIntake(gender, weight, e.target.value);
              }}
              required
            />
          </Label>
          <Label>
            The required amount of water in liters per day:
            <ValueResult>{parseFloat(waterIntake).toFixed(1)} L </ValueResult>
          </Label>
          <Label>
            Write down how much water you will drink in liters:
            <Input
              type="number"
              value={plannedIntake}
              onChange={(e) => setPlannedIntake(e.target.value)}
              required
            />
          </Label>
          <Button type="submit">Save</Button>
        </Form>
      </Modal>
    </Backdrop>
  );
}

export default DailyNormaModal;
