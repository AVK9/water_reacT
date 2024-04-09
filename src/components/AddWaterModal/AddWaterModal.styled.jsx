import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primery-color-white);
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  width: 592px;
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 767px) {
    width: 280px; 
    padding: 24px 12px
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 704px; 
  }
`;

export const HeaderAddModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-weight: 500; 
  color: var(--primary-color-black);
  font-size: 26px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: var(--primery-color-blue);
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: transparent;

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
`;

export const ChooseValueText = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: var(--primery-color-black);
  margin-bottom: 16px;
`;

export const AmountOfWaterText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--primery-color-black);
  margin-bottom: 12px;
`;

export const WaterAmountControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const IconDispenser = styled.svg`
  width: ${(props) => props.size || '14px'};
  height: ${(props) => props.size || '14px'};
  fill: var(--primery-color-blue);
`;

export const WaterAmountButton = styled.button`
  background-color: var(--primery-color-white); 
  box-shadow: none;
  border: 1px solid var(--secondary-color-4); 
  border-radius: 50%;
  color: var(--primery-color-blue); 
  width: 44px;
  height: 44px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  transition: box-shadow 500ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  }
`;

export const WaterAmountInput = styled.input`
  padding: 6px 10px;
  font-size: 17px;
  font-weight: 700;
  border: none; 
  border-radius: 40px; 
  text-align: center;
  color: var(--primery-color-blue);
  max-width: 92px; 
  height: 36px; 
  background-color: var(--secondary-color---5);
  outline: none;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid var(--secondary-color---5);
  border-radius: 6px; 
  color: var(--primery-color-blue);
  width: 120px; 
  height: 44px; 
  background-color: var(--primery-color-white);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  background: transparent; 
  appearance: none; 
  outline: none; 
  color: var(--primery-color-blue); 
`;

export const EnterWaterValueText = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 18px;
  color: var(--primery-color-black);
`;

export const WaterAmountInputManually = styled.input`
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid var(--secondary-color---5);
  border-radius: 6px; 
  color: var(--primery-color-blue);
  width: 120px; 
  height: 44px; 
  background-color: var(--primery-color-white);
  outline: none;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const AddWaterAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const AddWaterAmount = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--primery-color-blue);
`;


export const SaveButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: var(--primery-color-white);
  background-color: var(--primery-color-blue);
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  transition: box-shadow 500ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 160px;
    height: 44px;
  }
`;
