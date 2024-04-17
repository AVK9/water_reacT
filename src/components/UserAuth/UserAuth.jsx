import { StyledLink, TextLink, IconWrapper } from './UserAuth.styled';
import sprite from '../../assets/img/sprite.svg';
import { useTranslation } from 'react-i18next';

const UserAuth = () => {
  const { t } = useTranslation();
  return (
    <StyledLink to="/signin">
      <TextLink>{t('Sign In')}</TextLink>

      <IconWrapper>
        <use xlinkHref={`${sprite}#icon-user`} />
      </IconWrapper>
    </StyledLink>
  );
};

export default UserAuth;
