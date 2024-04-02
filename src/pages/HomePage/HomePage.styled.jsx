import styled from 'styled-components';
import backgroundTop from '../../assets/img/background-main-page-desktop-top.png';
import backgroundBottom from '../../assets/img/background-main-page-desktop-bottom.png';

export const HomeBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const WaterControlBox = styled.div`
  border-radius: 10px;
  padding: 24px 8px;
  width: 280px;
  height: 836px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-color-2);
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundTop});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: blue; */
  z-index: -1;
`;
// export const BackgroundBot = styled.div`
//   width: 100%;
//   background-image: url(${backgroundBottom});
//   background-repeat: no-repeat;
//   background-position: center bottom;
//   background-size: contain;
// `;
export const BackgroundBot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundBottom});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-color: blue; */
  z-index: -2;
`;
