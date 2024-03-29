import { StyledLink, IconWrapper } from './UserAuth.Module';
import sprite from '../../assets/img/sprite.svg';

const UserAuth = () => {
  return (
    <div>
      <StyledLink to="/signin">
        Sign In
        <IconWrapper>
          <use href={`${sprite}#icon-user`} />
        </IconWrapper>
      </StyledLink>
    </div>
  );
};

export default UserAuth;
