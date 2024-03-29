import { HeaderContainer, Navigation } from './Header.styled';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo />
        <UserAuth />
      </Navigation>
    </HeaderContainer>
  );
};
