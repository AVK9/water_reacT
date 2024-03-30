import logo from '../../assets/img/logo.svg';
import { LogoBox } from './Logo.Module';

const Logo = () => {
  return (
    <LogoBox>
      <a href="/">
        <img src={logo} alt="Water Tracker" />
      </a>
    </LogoBox>
  );
};

export default Logo;
