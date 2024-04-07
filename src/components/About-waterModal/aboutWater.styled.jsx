import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 999; 
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  width: 592px; 
  height: 580px; 
  @media (max-width: 767px) {
    width: 280px; 
    height: 648px; 
    padding: 24px 12px
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 704px; 
  }
`;


export const ModalTitle = styled.h2`
font-family: 'Roboto';
font-weight: 500; 
color: var(--primary-color-black);
font-size: 26px;
line-height: 1.5; 
margin-bottom: 24px;
@media screen and (min-width: 768px) {
  font-size: 28px;
}`;

export const PreviousIntakeText = styled.p`
  font-family: 'Roboto';
  margin-bottom: 24px;
  background-color: #D7E3FF;
  width: 254px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 30px;
`;

export const IconWrap = styled.svg`
  width: 36px;
  height: 36px;
  fill: #407bff;
`;

export const IconClose = styled.svg`
width: 24px;
height: 24px;
  &:hover {
    background: rgba(13, 92, 132, 0.1);
    border-radius: 50%;
    transition: background 0.3s ease;
    transform: scale(0.85);
    transition: transform 0.3s ease;
  }

  &:active {
    transform: scale(1.45);
    transition: transform 0.3s ease;
  }
`
export const IconDispenser = styled.svg`
width: 14px;
height: 14px;
fill: #407bff;
`



export const IntakeValue = styled.span`
font-family: 'Roboto';
font-weight: 400; 
line-height: 1.5;
font-size: 18px;
color: #407BFF

`;
export const IntakeTime = styled.span`
font-family: 'Roboto';
font-weight: 400; 
font-size: 12px;
line-height: 1.5;
color: #2F2F2F;
`;

export const CorrectEnteredDataText = styled.p`
font-family: 'Roboto';
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #2F2F2F;
`;

export const AmountOfWaterText = styled.p`
font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 12px;
  color: #2F2F2F;
      @media (max-width: 767px) {
  }
`;

export const WaterAmountControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
`;



export const WaterAmountButton = styled.button`
  background-color: #ffffff; 
  border: 1px solid #9EBBFF; 
  border-radius: 30px; 
  padding: 10px; 
  font-size: 16px;
  cursor: pointer;
  color: #407BFF; 
  width: 44px;
  height: 44px;
    display: flex; 
  justify-content: center; 
  align-items: center;
`;

export const WaterAmountInput = styled.input`
  font-family: 'Roboto';
  margin: 0 7px;
  padding: 6px 10px;
  font-size: 17px;
  font-weight: 700;
  border: none; 
  line-height: 1.1;
  border-radius: 40px; 
  text-align: center;
  color: #407BFF;
  max-width: 92px; 
  height: 36px; 
  background-color: #D7E3FF;
  outline: none;

`;

export const WaterAmountInputManually = styled.input`
  font-family: 'Roboto';
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #D7E3FF;
  border-radius: 6px; 
  color: #407BFF;
  width: 544px; 
  height: 44px; 
  background-color: #ffffff;
  margin-bottom: 24px;
  outline: none;
    @media (max-width: 767px) {
    width: 256px; 
  }
`;


export const TimeInputContainer = styled.div`
  margin-bottom: 24px;
`;


export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #D7E3FF;
  border-radius: 6px; 
  color: #407BFF;
  width: 544px; 
  height: 44px; 
  background-color: #ffffff;
    @media (max-width: 767px) {
    width: 256px; 
  }
`;


export const StyledSelect = styled.select`
  border: none;
  background: transparent; 
  appearance: none; 
  outline: none; 
  color: #407BFF; 
`;


export const TimeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 30px;
  cursor: pointer;
  background-color: #ffffff;
  @media (max-width: 767px) {
  top: 30px;
  right: 14px;
  }
`;

export const EnterWaterValueText = styled.p`
  font-family: 'Roboto';
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #2F2F2F;
`;

export const EditedWaterAmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  @media (max-width: 767px) {
flex-direction: column;
align-items: center;
gap: 16px
  }

`;

export const EditedWaterAmount = styled.div`
font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  color: #407BFF;
`;


export const SaveButton = styled.button`
font-family: 'Roboto';
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 160px;
  height: 44px;
background-color: #407BFF;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  &:hover {
    background-color: #0056b3;
  }
    @media (max-width: 767px) {
  width: 256px;
  height: 36px;
  }
`;