import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Logo = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <>
      {
        isAuth ?
          <Link to="/home">
            <img src={logo} alt="Water Tracker" />
          </Link > :
          <Link to="/welcome">
            <img src={logo} alt="Water Tracker" />
          </Link>
      }
    </>
  );
};

export default Logo;
