import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../redux/auth/selectors';
import { HeaderContainer, Navigation } from './Header.styled';
import Logo from './../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import HeaderSetting from '../SettingModal/HeaderSetting/HeaderSetting';
import { Section } from '../Section/Section';

export const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Section>
      <HeaderContainer>
        <Navigation>
          <Logo />
          <UserAuth />
        </Navigation>
        <HeaderSetting />
      </HeaderContainer>
    </Section>
  );
};
