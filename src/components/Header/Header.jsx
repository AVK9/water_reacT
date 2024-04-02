import { HeaderContainer, Navigation } from './Header.styled';
import Logo from './../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import HeaderSetting from '../SettingModal/HeaderSetting/HeaderSetting';


export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo />
        <UserAuth /> 
      </Navigation>
      <HeaderSetting />
      
    </HeaderContainer>
  );
};
