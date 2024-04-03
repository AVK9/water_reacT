export const handleGetWater = (state, { payload }) => {
  state.water = payload;
  console.log('handleGetWater :>> ', payload);
};
export const handleAddWater = (state, { payload }) => {
  console.log('handleAddWater :>> ', payload);
  state.dayWaterList.push(payload);
};

export const handleDelWater = (state, { payload }) => {
  const item = state.water.findIndex((index) => index.id === payload.id);
  state.water.splice(item, 1);
};
