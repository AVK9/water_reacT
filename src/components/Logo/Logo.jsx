import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Water Tracker" />
    </Link>
  );
};

export default Logo;
