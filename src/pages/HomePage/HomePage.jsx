import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import { HomeBox, WaterControlBox } from './HomePage.styled';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
const HomePage = () => {
  return (
    <HomeBox>
      <DailyNorma />
      <WaterControlBox>
        <TodayWaterList />
        <MonthStatsTable />
      </WaterControlBox>
    </HomeBox>
  );
};

export default HomePage;
