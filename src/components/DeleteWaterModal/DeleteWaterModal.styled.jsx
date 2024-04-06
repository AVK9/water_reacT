import { styled } from "styled-components";
import { animated } from "react-spring";

export const OverlayDeleteModal = styled(animated.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  overflow: auto;
`;

export const ContainerDeleteModal = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 32px 24px;
  z-index: 10;
  border-radius: 10px;
  background: var(--primery-color-white);
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleDelete = styled.h3`
  color: var(--primery-color-black);
  font-size: 26px;
  font-weight: 500;
`;

export const ButtonClose = styled.button`
  background: none;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: var(--primery-color-blue);
`;

export const TextDelete = styled.p`
  color: var(--primery-color-black);
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 200px;
  }
`;

export const ButtonDelete = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: var(--primery-color-white);
  background-color: var(--secondary-color-3);
  box-shadow: 0 4px 8px rgba(239, 80, 80, 0.34);
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  transition: box-shadow 500ms ease-in-out;

  &:hover {
  box-shadow: 0 4px 14px rgba(239, 80, 80, 0.54);
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

export const ButtonCancel = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: var(--primery-color-blue);
  background-color: var(--secondary-color---5);
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 36px;

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
