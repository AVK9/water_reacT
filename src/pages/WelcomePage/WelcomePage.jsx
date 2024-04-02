import WaterConsumptionTracker from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';
import { BackgroundTopWP, BackgroundBottomWP, ContainerWP } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <BackgroundTopWP>
      <BackgroundBottomWP>
        <ContainerWP>
          <WaterConsumptionTracker />
          <WhyDrinkWater />
        </ContainerWP>
      </BackgroundBottomWP>
    </BackgroundTopWP>
  );
};

export default WelcomePage;
