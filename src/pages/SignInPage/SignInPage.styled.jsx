import styled from '@emotion/styled';
import bacStail from '../../assets/img/Frame-mobail.png';
import mobilWater from '../../assets/img/mobile-woter.png';
import tabWater from '../../assets/img/BottleforSignin.png';
import desktopWater from '../../assets/img/desktopWaterIn.png';
import desktopBac from '../../assets/img/sign-in-up/BackgroundDesktopIn.png';
import { Link } from 'react-router-dom';

export const DesktopBg = styled.div``;

export const SignInGlobalContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  padding-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-image: url(${desktopWater});
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: flex-start;
  background-image: url(${bacStail});

  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${tabWater});
    width: 720px;
    height: 658px;
    background-position: -35px;
    background-position-y: -70px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: none;

    padding-top: 135px;
    padding-left: 840px;

    background: url(${desktopBac});
    background-repeat: no-repeat;

    width: 1404px;
    height: 582px;
  }
`;

export const SignInwater = styled.div`
  background-image: url(${mobilWater});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center center;

  @media screen and (min-width: 768px) {
    background-image: none;
  }
`;

export const SignInTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--primery-color-black);
`;

export const SignInLabel = styled.label`
  display: flex;
  gap: 16px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primery-color-black);
`;

export const SignInInput = styled.input`
  border: 1px solid ${(props) => (props.error ? 'red' : '#d7e3ff')};
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  background: var(--primery-color-white);
  outline: none;

  @media screen and (min-width: 768px) {
    border: 1px solid ${(props) => (props.error ? 'red' : '#d7e3ff')};
    border-radius: 6px;
    padding: 12px 10px;
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    border: 1px solid ${(props) => (props.error ? 'red' : '#d7e3ff')};
    border-radius: 6px;
    padding: 12px 10px;
    width: 384px;
    height: 44px;
  }
`;

export const SignInButton = styled.button`
  width: 280px;
  height: 36px;
  padding: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  background: var(--primery-color-blue);
  color: var(--primery-color-white);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 10px;
    padding: 10px 30px;
    width: 384px;
    height: 44px;
  }
`;

export const TogglePasswordButton = styled.button`
  display: flex;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 16px;
    height: 16px;

    fill: transparent;

    stroke: #407bff;
    background-color: #fff;
  }

  @media screen and (min-width: 1440px) {
    right: -30px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const TextLink = styled.p`
  color: var(--primery-color-blue);
  font-size: 16px;
  transition: color 500ms ease-in-out;

  &:hover {
    color: var(--secondary-color-5);
  }
`;

export const WaterBulb = styled.div`
  position: absolute;

  background-color: #79b8ff;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  animation: waterEffect 5s infinite alternate;
  @keyframes waterEffect {
    from {
      background-color: #407bff;
    }
    to {
      background-color: #f3ecec;
    }
  }
`;

export const FirstWaterBulb = styled(WaterBulb)`
  @media screen and (min-width: 768px) {
    top: 210px;
    left: 500px;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 180px;
    left: 480px;
    width: 20px;
    height: 20px;
  }
`;

export const SecondWaterBulb = styled(WaterBulb)`
  @media screen and (min-width: 768px) {
    top: 43%;
    left: 56%;
    width: 27px;
    height: 27px;
  }
  @media screen and (min-width: 1440px) {
    top: 47.5%;
    left: 25.7%;
    width: 27px;
    height: 27px;
  }
`;

export const ThirdWaterBulb = styled(WaterBulb)`
  @media screen and (min-width: 768px) {
    top: 60%;
    left: 50%;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 71%;
    left: 22%;
    width: 20px;
    height: 20px;
  }
`;

export const FourthWaterBulb = styled(WaterBulb)`
  @media screen and (min-width: 768px) {
    top: 72%;
    left: 66.5%;
    width: 27px;
    height: 27px;
  }
  @media screen and (min-width: 1440px) {
    top: 76%;
    left: 28.6%;
    width: 27px;
    height: 27px;
  }
`;

export const FifthWaterBulb = styled(WaterBulb)`
  @media screen and (min-width: 768px) {
    top: 64.2%;
    left: 61.4%;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 87%;
    left: 31.7%;
    width: 40px;
    height: 40px;
  }
`;
