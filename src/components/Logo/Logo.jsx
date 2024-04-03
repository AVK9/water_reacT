import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Water Tracker" />
    </Link>
  );
};

export default Logo;
