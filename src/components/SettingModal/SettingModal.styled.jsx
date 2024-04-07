import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  z-index: 10;
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 32px 12px;
  z-index: 100;
  border-radius: 10px;
  background: var(--primery-color-white);
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    top: 50%;
    width: 1008px;
  }
`;

export const HeaderSettingModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSettingName = styled.h2`
  font-weight: 600;
  width: 180px;
  font-size: 26px;
  line-height: 32px;
  text-align: left;
`;

export const ButtonClose = styled.button`
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

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: var(--primery-color-blue);
`;

export const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px
`;

export const TitlePhoto = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: var(--primery-color-blue);

  & p {
    transition: color 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }

  &:hover,
  &:focus {
    & svg {
      stroke: var(--secondary-color-3);
    }
    & p {
      color: var(--secondary-color-3);
    }
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: var(--primery-color-blue);
    transition: fill 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--secondary-color---5);
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;
  div {
    width: auto;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: var(--secondary-color---5);
    background-color: var(--primery-color-blue);
  }
`;

export const Form = styled.form``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;


  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    gap: 52px;
  }
`;

export const StyledLabel = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primery-color-black);
`;

export const LabelName = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primery-color-black);
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px
`;

export const RadiosWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const RadioWrapper = styled.div`
  input {
    display: none;
    & + span {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      cursor: pointer;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 0px;
        border-radius: 50%;
        margin-right: 5px;
        width: 14px;
        height: 14px;
        border: 1px solid var(--primery-color-blue);
        background: var(--primery-color-white);
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 4px;
        width: 6px;
        height: 6px;
        background: var(--primery-color-blue);
        border-radius: 50%;
        opacity: 0;
        transform: scale(0, 0);
        transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }

    &:checked + span:after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

export const ContainerRME = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EyeButton = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    fill: transparent;

    stroke: var(--primery-color-blue);
  }

  @media screen and (min-width: 768px) {
    right: 274px;
  }

  @media screen and (min-width: 1440px) {
    right: 8px;
  }
`;

export const Input = styled.input`
  width: 256px;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid var(--secondary-color---5);
  color: var(--primery-color-blue);
  line-height: 20px;

  &:focus {
    outline: 1px solid var(--secondary-color---5);
  }

  &::placeholder {
    color: var(--secondary-color-4);
  }

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const FormText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 12px;
`;

export const StyledButton = styled.button`
  margin-top: 24px;
  width: 256px;
  height: 36px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  color: var(--primery-color-white);
  background: var(--primery-color-blue);
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:focus {
    outline: 1px solid var(--primery-color-blue);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    float: right;
  }
`;

export const TextError = styled.p`
  font-size: 14px;
  color: var(--secondary-color-3);
  font-weight: 400;
  line-height: 128.5%;
`;
