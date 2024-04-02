import styled from 'styled-components';
import backgroundMobileTop from '../../assets/img/background-main-page-mobile-top.png';
import backgroundMobileBottom from '../../assets/img/background-main-page-mobile-bottom.png';
import backgroundTabletTop from '../../assets/img/background-main-page-tablet-top.png';
import backgroundTabletBottom from '../../assets/img/background-main-page-tablet-bottom.png';
import backgroundDesktopTop from '../../assets/img/background-main-page-desktop-top.png';
import backgroundDesktopBottom from '../../assets/img/background-main-page-desktop-bottom.png';

export const BackgroundTopWP = styled.div`
  position: absolute;
  top: 72px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: url(${backgroundMobileTop});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;

  @media screen and (min-width: 768px) {
    top: 90px;
    background-image: url(${backgroundTabletTop});
  }

  @media screen and (min-width: 1440px) {
    top: 72px;
    background-image: url(${backgroundDesktopTop});
  }
`;

export const BackgroundBottomWP = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: url(${backgroundMobileBottom});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTabletBottom});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktopBottom});
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

  @media screen and (max-width: 520px) {
    padding-right: 20px;
    padding-left: 20px;
  }

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
