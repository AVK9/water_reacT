import logo from '../../assets/img/logo.svg';
import { StyledLink } from './Logo.Module';

const Logo = () => {
  return (
    <StyledLink to="/">
      <img src={logo} alt="Water Tracker" />
    </StyledLink>
  );
};

export default Logo;
