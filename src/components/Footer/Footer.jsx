import { Section } from '../Section/Section';
import { Content, FooterContainer, StyledLink } from './Footer.styled';
// import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Section>
      <FooterContainer>
        {/* <Logo /> */}
        <StyledLink to="/welcome">WelcomePage</StyledLink>

        <Content> © 2024 </Content>
        <StyledLink to="/home">HomePage</StyledLink>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
