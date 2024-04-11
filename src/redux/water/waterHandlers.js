export const handleGetWater = (state, { payload }) => {
  state.dayWaterStat = payload;
  if (payload) {
    state.dayWaterList = payload.waterRecords;

    // if (payload.waterRecords.length) {
    //   state.selectDay = payload.waterRecords[0].date;
    // } else {
    //   new Date();
    // }
    // console.log(
    //   'handleGetWater :>> ',
    //   state.dayWaterStat.percentageWaterAmount
    // );
  }
  return;
};
export const handleGetMonthWater = (state, { payload }) => {
  state.month = payload;
  // if ((state.selectMonth = payload)) {
  //   state.selectMonth = payload[0].date;
  // } else {
  //   new Date();
  // }

  // state.selectMonth = payload[0].date;

  // console.log('handleGetMonthWater :>> ', payload);
};
export const handleAddWater = (state, { payload }) => {
  // console.log('handleAddWater!!!!!!!!!!!!!!!!!! :>> ', payload);
  state.dayWaterList.push(payload);
  state.dayWaterStat.percentageWaterAmount =
    state.dayWaterStat.percentageWaterAmount +
    (payload.waterAmount * 100) / state.dailyWaterRate;
  // console.log(
  //   'state.auth.profile.waterRate!!!!!!!!!!!!!!!!!! :>> ',
  //   state.dailyWaterRate
  // );
  // payload.waterAmount * state.dailyWaterRate / 100;
  //auth.profile.waterRate
};

export const handleDelWater = (state, payload) => {
  const item = state.dayWaterList.findIndex(
    (index) => index._id === payload.meta.arg._id
  );
  state.dayWaterList.splice(item, 1);
  // console.log('!!!!!!!!!!!!!!!!!!payload', payload);
  state.dayWaterStat.percentageWaterAmount =
    state.dayWaterStat.percentageWaterAmount -
    (payload.meta.arg.waterAmount * 100) / state.dailyWaterRate;
};

export const handleChangeWater = (state, { payload }) => {
  const index = state.dayWaterList.findIndex(
    (item) => item.date === payload.date
  );

  if (index !== -1) {
    state.dayWaterList[index] = payload;
  }
};
