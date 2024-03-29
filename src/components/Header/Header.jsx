import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import logo from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="WaterTracker" />
      <Navigation>
        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
