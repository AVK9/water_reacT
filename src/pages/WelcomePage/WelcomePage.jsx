import WaterConsumptionTracker from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';
import { Container } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </Container>
  );
};

export default WelcomePage;
