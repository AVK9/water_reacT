import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import {
  WaterControlBox,
  Background,
  HomeBox,
  Bottle,
  ElemBox,
  Compare,
} from './HomePage.styled';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import { Section } from '../../components/Section/Section';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
const HomePage = () => {
  return (
    <Background>
      <Section>
        <HomeBox>
          <Compare>
            <ElemBox>
              <DailyNorma />
              <Bottle />
            </ElemBox>
            <WaterRatioPanel />
          </Compare>
          <WaterControlBox>
            <TodayWaterList />
            <MonthStatsTable />
          </WaterControlBox>
        </HomeBox>
      </Section>
    </Background>
  );
};

export default HomePage;
