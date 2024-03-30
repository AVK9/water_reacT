import styled from 'styled-components';

export const Form = styled.form``;

export const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: inline-block;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const StyledLabel = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
  color: #2f2f2f;
`;

export const LabelName = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 24px;
  color: #2f2f2f;

  @media screen and (min-width: 1440px) {
    &:first-child {
      margin-top: 53px;
    }
  }
`;

export const GenderWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 53px;
  }
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
        border: 1px solid #407bff;
        background: #ffffff;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 4px;
        width: 6px;
        height: 6px;
        background: #407bff;
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

export const FieldWrapper = styled.div``;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EyeButton = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    fill: #407bff;
  }
`;

export const Input = styled.input`
  width: 256px;
  height: 44px;
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  line-height: 20px;

  &:focus {
    outline: 1px solid #d7e3ff;
  }

  &::placeholder {
    color: #d7e3ff;
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
