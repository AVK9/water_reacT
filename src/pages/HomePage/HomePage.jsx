import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import {
  WaterControlBox,
  Background,
  BackgroundBottom,
} from './HomePage.styled';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import { Section } from '../../components/Section/Section';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
const HomePage = () => {
  return (
    <Background>
      <BackgroundBottom>
        <Section>
          <DailyNorma />
          <WaterRatioPanel />
          <WaterControlBox>
            <TodayWaterList />
            <MonthStatsTable />
          </WaterControlBox>
        </Section>
      </BackgroundBottom>
    </Background>
  );
};

export default HomePage;
