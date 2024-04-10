export const handleGetWater = (state, { payload }) => {
  if (payload) {
    state.dayWaterList = payload.waterRecords;

    if (payload.waterRecords.length) {
      state.selectDay = payload.waterRecords[0].date;
    } else {
      new Date();
    }
    console.log('handleGetWater :>> ', payload.waterRecords);
  }
  return;
};
export const handleGetMonthWater = (state, { payload }) => {
  state.month = payload;
  if ((state.selectMonth = payload)) {
    state.selectMonth = payload[0].date;
  } else {
    new Date();
  }

  state.selectMonth = payload[0].date;

  console.log('handleGetMonthWater :>> ', payload);
};
export const handleAddWater = (state, { payload }) => {
  console.log('handleAddWater :>> ', payload);
  state.dayWaterList.push(payload);
};

export const handleDelWater = (state, { payload }) => {
  const item = state.water.findIndex((index) => index.id === payload.id);
  state.water.splice(item, 1);
};
export const handleChangeWater = (state, { payload }) => {
  const index = state.dayWaterList.findIndex(item => item.date === payload.date);
  
  if (index !== -1) {
    state.dayWaterList[index] = payload;
  }
};
