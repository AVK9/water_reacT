import { StyledLink, TextLink, IconWrapper } from './UserAuth.styled';
import sprite from '../../assets/img/sprite.svg';

const UserAuth = () => {
  return (
    <StyledLink to="/signin">
      <TextLink>Sign In</TextLink>
      <IconWrapper>
        <use xlinkHref={`${sprite}#icon-user`} />
      </IconWrapper>
    </StyledLink>
  );
};

export default UserAuth;
