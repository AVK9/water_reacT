import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import { HomeBox } from './HomePage.styled';
const HomePage = () => {
  return (
    <HomeBox>
      HomePage
      <DailyNorma />
      <MonthStatsTable />
    </HomeBox>
  );
};

export default HomePage;
