import { styled } from "styled-components";

export const OverlayLogoutModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ContainerLogoutModal = styled.div`
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
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLogout = styled.h3`
  color: var(--primery-color-black);
  font-size: 26px;
  font-weight: 500;
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

export const TextLogout = styled.p`
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

export const ButtonLogout = styled.button`
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
