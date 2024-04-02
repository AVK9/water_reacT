import styled from 'styled-components';
import backgroundTop from '../../assets/img/background-main-page-desktop-top.png';
import backgroundBottom from '../../assets/img/background-main-page-desktop-bottom.png';

export const WaterControlBox = styled.div`
  border-radius: 10px;
  padding: 24px 8px;
  width: 280px;
  height: 836px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-color-2);
`;

export const BackgroundBottom = styled.div`
  background-image: url(${backgroundBottom});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Background = styled.div`
  background-image: url(${backgroundTop});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  background-repeat: no-repeat;
`;
