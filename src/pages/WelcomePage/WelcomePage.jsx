import { Section } from '../../components/Section/Section';
import WaterConsumptionTracker from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';
import { BackgroundTopWP, BackgroundBottomWP, ContainerWP } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <BackgroundTopWP>
      <BackgroundBottomWP>
        <Section>
          <ContainerWP>
            <WaterConsumptionTracker />
            <WhyDrinkWater />
          </ContainerWP>
        </Section>
      </BackgroundBottomWP>
    </BackgroundTopWP>
  );
};

export default WelcomePage;
