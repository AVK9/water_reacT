import styled from 'styled-components';

import BackgroundD from '../../assets/img/background-home-page/BackgroundD.png';
import BackgroundD2x from '../../assets/img/background-home-page/BackgroundD2x.png';
import BackgroundM from '../../assets/img/background-home-page/BackgroundM.png';
import BackgroundM2x from '../../assets/img/background-home-page/BackgroundM2x.png';
import BackgroundHomescreenT from '../../assets/img/background-home-page/BackgroundHomescreenT.png';
import BackgroundHomescreenT2X from '../../assets/img/background-home-page/BackgroundHomescreenT2X.png';

import BottleM from '../../assets/img/background-home-page/BottleM.png';
import BottleM2x from '../../assets/img/background-home-page/BottleM2x.png';
import BotleHomescreenT from '../../assets/img/background-home-page/BotleHomescreenT.png';
import BotleHomescreenT2x from '../../assets/img/background-home-page/BotleHomescreenT2x.png';
import BotleHomescreenD from '../../assets/img/background-home-page/BotleHomescreenD.png';
import BotleHomescreenD2x from '../../assets/img/background-home-page/BotleHomescreenD2x.png';
export const Background = styled.div`
  background-image: -webkit-image-set(
    url(${BackgroundM}) 1x,
    url(${BackgroundM2x}) 2x
  );
  width: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  /* min-height: 100vh; */

  @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(
      url(${BackgroundHomescreenT}) 1x,
      url(${BackgroundHomescreenT2X}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: -webkit-image-set(
      url(${BackgroundD}) 1x,
      url(${BackgroundD2x}) 2x
    );
  }
`;
export const HomeBox = styled.div`
  border: none;
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Compare = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Bottle = styled.img`
  border: none;
  margin-top: 8px;
  margin-bottom: 15px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  width: 100%;
  height: 208px;
  background-image: -webkit-image-set(url(${BottleM}) 1x, url(${BottleM2x}) 2x);

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 518px;
    height: 386px;
    background-image: -webkit-image-set(
      url(${BotleHomescreenT}) 1x,
      url(${BotleHomescreenT2x}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    width: 738px;
    height: 548px;

    margin-bottom: 44px;
    margin-left: 0;
    margin-right: 0;
    background-image: -webkit-image-set(
      url(${BotleHomescreenD}) 1x,
      url(${BotleHomescreenD2x}) 2x
    );
  }
`;

export const ElemBox = styled.div`
  position: relative;
  border: none;
`;

export const WaterControlBox = styled.div`
  margin-top: 38px;
  border-radius: 10px;
  padding: 24px 8px;
  width: 100%
  height: 836px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-color-2);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 790px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-right: 32; */
    margin-top: 0;
    width: 592px;
  }
`;
