import styled from '@emotion/styled';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  button {
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    @media screen and (min-width: 768px) {
      width: 336px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media screen and (min-width: 1440px) {
      width: 178px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
`;

export const WaterStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  p {
    color: #407bff;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 768px) {
    width: 356px;
  }
  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const WaterMeter = styled.div`
  position: relative;
  height: 8px;
  background-color: #d7e3ff;
  width: calc(100% - 31px);
  padding: 0 20px 0 11px;
  border-radius: 10px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${(props) => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border: 1px solid #407bff;
    border-radius: 100%;
  }
  div {
    position: absolute;
    border-radius: 10px;

    top: 0;
    left: 0;

    width: ${(props) => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    height: 100%;
    background-color: #9ebbff;
  }
`;

export const WaterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  span {
    color: #407bff;
    font-size: 12px;
    line-height: calc(16 / 12);
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 8px;
      background-color: #d7e3ff;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
    &:first-child {
      margin-left: 11px;
    }
    &:nth-child(2) {
      font-size: 16px;
      line-height: calc(20 / 16);
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const Button = styled.button`
  width: 280px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px 76px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;
  color: #fff;
  svg {
    width: 24px;
    height: 24px;
    fill: transparent;
    stroke: #fff;
    stroke-width: 2px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
