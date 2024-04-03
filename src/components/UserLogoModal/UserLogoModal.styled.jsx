import { styled } from 'styled-components';

export const ContainerUserLogoModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: var(--primery-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.2);
  max-width: 118px;
  z-index: 10;
  position: fixed;
  top: 48px;
  right: 20px;

  @media screen and (min-width: 768px) {
    top: 58px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    right: 112px;
  }
`;

export const ButtonsUserLogoModal = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  stroke: ${(props) => props.color || 'var(--primery-color-blue)'};
  fill: transparent;
`;

export const ButtonText = styled.p`
  color: var(--primery-color-blue);
  font-size: 16px;
`;
