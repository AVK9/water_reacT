import styled from 'styled-components';
export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 852px;
  padding: 32px 12px;
  z-index: 100;
  border-radius: 10px;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 860px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
    height: 592px;
  }
`;

export const HeaderSettingModal = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;

  @media screen and (min-width: 768px) {
    gap: 452px;
  }

  @media screen and (min-width: 1440px) {
    gap: 765px;
  }
`;

export const HeaderSettingName = styled.h2`
  font-weight: 600;
  width: 180px;
  font-size: 26px;
  line-height: 32px;
  text-align: left;
`;

export const ButtonClose = styled.span`
  cursor: pointer;
  fill: #407bff;

  & svg {
    width: 24px;
    height: 24px;
  }

  & use {
    fill: #407bff;
    transition: fill 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }

  &:hover use {
    fill: #ef5050;
  }
`;
export const WrapperModalContent = styled.div``;
