import { Container, Title, StyledImage } from './WelcomePage.styled';
import example from '../../assets/img/background-main-page-bottom.png';

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default WelcomePage;
