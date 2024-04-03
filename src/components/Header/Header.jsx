import { HeaderContainer, Navigation } from './Header.styled';
import Logo from './../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import HeaderSetting from '../SettingModal/HeaderSetting/HeaderSetting';
import { Section } from '../Section/Section';

export const Header = () => {
  return (
    <Section>
      <HeaderContainer>
        <Navigation>
          <Logo />
          <UserLogo />
        </Navigation>
      </HeaderContainer>
    </Section>
  );
};
