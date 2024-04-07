import { styled } from 'styled-components';

export const TransparentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerUserLogoModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: var(--primery-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.2);
  min-width: 118px;
  z-index: 10;
  position: absolute;
  top: ${(props) => (props.isOpen ? '32px' : '-6px')};
  right: 0;
  overflow: auto;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.8s ease-in-out, top 0.5s ease-in-out;
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
