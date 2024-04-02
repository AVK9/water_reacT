import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalNorma = styled.div`
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  color: #2f2f2f;
  width: 280px;
  padding: 24px 12px;
  border-radius: 10px;
  background: #fff;
  overflow: auto;

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

export const NormaContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  gap: 24px;
`;

export const Title = styled.h2`
  font-family: var(--font-face);
  font-weight: 500;
  line-height: 1.23;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 12px;
  border: none;
  background: transparent;
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const WrapperDef = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DescriptionDef = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LabelRate = styled.label`
  /* width: 54px; */
  color: var(--primery-color-black);
  font-family: var(--font-face);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const LabelDef = styled.span`
  color: var(--primery-color-blue);
  font-family: var(--font-face);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const DescriptionTitle = styled.p`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #d7e3ff;
  color: #8f8f8f;
  font-family: var(--font-face);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const CalcTitle = styled.h3`
  color: var(--primery-color-black);
  font-family: var(--font-face);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
export const LabelGen = styled.label`
  display: flex;
  /*  align-items: flex-start;
  gap: 24px; */
`;

export const LabelG = styled.label`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const GenTitle = styled.p`
  margin-left: 8px;
  margin-right: 24px;
`;

export const Form = styled.form`
  /* styles for Form */
`;

export const Label = styled.label`
  /* styles for Label */
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: calc(1.25);
  font-weight: 500;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 8px 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: rgb(64, 123, 255);
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px 0px;
  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98) 0s;

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-left: auto;
    font-size: 18px;
    line-height: calc(1.33333);
    padding: 10px 30px;
  }
`;
export const Input = styled.input``;

export const GenInput = styled.input`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
