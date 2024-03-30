import { Content, FooterContainer } from './Footer.styled';
// import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterContainer>
      {/* <Logo /> */}
      <a href="/welcome">WelcomePage</a>
      <Content> © 2024 </Content>
      <a href="/home">HomePage</a>
    </FooterContainer>
  );
};

export default Footer;
