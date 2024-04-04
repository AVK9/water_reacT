import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../redux/auth/selectors';
import { HeaderContainer, Navigation } from './Header.styled';
import Logo from './../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import { Section } from '../Section/Section';

export const Header = () => {
  const isLogged = useSelector(isAuthSelector);

  return (
    <Section>
      <HeaderContainer>
        <Navigation>
          <Logo />
          {isLogged ? <UserLogo /> : <UserAuth />}
        </Navigation>

      </HeaderContainer>
    </Section>
  );
};
