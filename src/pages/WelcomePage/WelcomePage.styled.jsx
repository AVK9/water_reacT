import styled from 'styled-components';
import backgroundMobileTop from '../../assets/img/background-main-page-mobile-top.png';
import backgroundMobileBottom from '../../assets/img/background-main-page-mobile-bottom.png';
import backgroundTabletTop from '../../assets/img/background-main-page-tablet-top.png';
import backgroundTabletBottom from '../../assets/img/background-main-page-tablet-bottom.png';
import backgroundDesktopTop from '../../assets/img/background-main-page-desktop-top.png';
import backgroundDesktopBottom from '../../assets/img/background-main-page-desktop-bottom.png';

export const BackgroundTopWP = styled.div`
  width: 100%;
  background-image: url(${backgroundMobileTop});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTabletTop});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktopTop});
  }
`;

export const BackgroundBottomWP = styled.div`
  width: 100%;
  background-image: url(${backgroundMobileBottom});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 100%;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTabletBottom});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktopBottom});
    background-size: contain;
  }
`;

export const ContainerWP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 80px;
    padding: 80px 0;
  }
`;
