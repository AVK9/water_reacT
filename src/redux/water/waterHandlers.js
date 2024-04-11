import * as dateFns from 'date-fns';

export const handleGetWater = (state, { payload }) => {
  state.dayWaterStat = payload;
  if (payload) {
    state.dayWaterList = payload.waterRecords;
  }
  return;
};
export const handleGetMonthWater = (state, { payload }) => {
  state.month = payload;
  // console.log('handleGetMonthWater!!!!!!!!!!!!!!!!!! :>> ', state.month);
};
export const handleAddWater = (state, { payload }) => {
  state.dayWaterList.push(payload);
  //---------------------
  // console.log('handleAddWater!!!!!!!!!!!!!!!!!! :>> ', payload);
  state.dayWaterStat.percentageWaterAmount =
    state.dayWaterStat.percentageWaterAmount +
    (payload.waterAmount * 100) / state.dailyWaterRate;
  //-------------------------
  const today = dateFns.format(new Date(), 'dd');

  // state.month.currenYeartMonth;
  // state.month.dayOfMonth;
  //state.month.percent
  const item = state.month.findIndex(
    (index) => index.dayOfMonth.toString() === today.toString()
  );
  state.month[item].percent = Math.round(
    state.dayWaterStat.percentageWaterAmount +
      (payload.waterAmount * 100) / state.dailyWaterRate
  );

  // console.log('handleAddWater!!!!!!!!!!!!!!!!!! :>> ', item);
};

export const handleDelWater = (state, payload) => {
  const item = state.dayWaterList.findIndex(
    (index) => index._id === payload.meta.arg._id
  );
  state.dayWaterList.splice(item, 1);
  //-------------------------

  state.dayWaterStat.percentageWaterAmount =
    state.dayWaterStat.percentageWaterAmount -
    (payload.meta.arg.waterAmount * 100) / state.dailyWaterRate;
  //-------------------------

  const today = dateFns.format(new Date(), 'dd');
  const itemPersent = state.month.findIndex(
    (index) => index.dayOfMonth.toString() === today.toString()
  );
  state.month[itemPersent].percent = Math.round(
    state.dayWaterStat.percentageWaterAmount -
      (payload.meta.arg.waterAmount * 100) / state.dailyWaterRate
  );
};

export const handleChangeWater = (state, { payload }) => {
  const index = state.dayWaterList.findIndex(
    (item) => item.date === payload.date
  );

  if (index !== -1) {
    state.dayWaterList[index] = payload;
  }
};
