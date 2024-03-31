import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: #2f2f2f;
  width: 280px;
  padding: 24px 12px;
  border-radius: 10px;
  background: #fff;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Title = styled.h1`
  /* styles for Title */
`;

export const Description = styled.p`
  /* styles for Description */
`;

export const Form = styled.form`
  /* styles for Form */
`;

export const Label = styled.label`
  /* styles for Label */
`;

export const Input = styled.input`
  /* styles for Input */
`;

export const Button = styled.button`
  /* styles for Button */
`;
export const ValueResult = styled.span`
  white-space: nowrap;
  color: var(--primery-color-blue);
  font-size: 18px;
  font-weight: 700;
  line-height: calc(24 / 18);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 12px;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
`;
