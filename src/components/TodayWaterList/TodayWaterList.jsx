import {
  AddWaterBox,
  BtnAddWater,
  Header,
  TodayWaterListBox,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  return (
    <TodayWaterListBox>
      <Header>Today</Header>
      <AddWaterBox>
        <BtnAddWater>+ Add Water</BtnAddWater>
      </AddWaterBox>
    </TodayWaterListBox>
  );
};

export default TodayWaterList;
