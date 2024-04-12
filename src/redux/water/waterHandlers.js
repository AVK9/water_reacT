import * as dateFns from 'date-fns';

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

//////////////////////////////////////
export const handleGetWater = (state, { payload }) => {
  state.dayWaterStat = payload;
  state.dayWaterList = payload.waterRecords;

  return;
};
//////////////////////////////////////
export const handleGetMonthWater = (state, { payload }) => {
  state.month = payload;
};
export const handleAddWater = (state, { payload }) => {
  state.dayWaterList.push(payload);
  //---------------------
  const sum = state.dayWaterList.reduce(
    (acc, currentValue) => acc + currentValue.waterAmount,
    0
  );
  state.dayWaterStat.percentageWaterAmount = (sum * 100) / state.dailyWaterRate;
  //-------------------------

  const today = dateFns.format(new Date(), 'dd');
  const item = state.month.findIndex(
    (index) => index.dayOfMonth.toString() === today.toString()
  );

  if (item !== -1) {
    state.month[item].percent = Math.round(
      state.dayWaterStat.percentageWaterAmount
    );
  } else {
    state.month.push({
      percent: Math.round(state.dayWaterStat.percentageWaterAmount),
      dayOfMonth: today,
    });
  }
};
/////////////////////////////////////////
export const handleDelWater = (state, payload) => {
  const item = state.dayWaterList.findIndex(
    (index) => index._id === payload.meta.arg._id
  );
  state.dayWaterList.splice(item, 1);
  //-------------------------
  const sum = state.dayWaterList.reduce(
    (acc, currentValue) => acc + currentValue.waterAmount,
    0
  );
  state.dayWaterStat.percentageWaterAmount = (sum * 100) / state.dailyWaterRate;
  //-------------------------

  const today = dateFns.format(new Date(), 'dd');
  const itemPersent = state.month.findIndex(
    (index) => index.dayOfMonth.toString() === today.toString()
  );
  state.month[itemPersent].percent = Math.round(
    state.dayWaterStat.percentageWaterAmount
  );
};
//////////////////////////////////////////////////////////
export const handleChangeWater = (state, { payload }) => {
  const index = state.dayWaterList.findIndex(
    (item) => item._id === payload._id
  );
  state.dayWaterList[index] = payload;
  //-------------------------------------
  const sumDayWaterList = state.dayWaterList.reduce(
    (acc, currentValue) => acc + currentValue.waterAmount,
    0
  );

  state.dayWaterStat.percentageWaterAmount =
    (sumDayWaterList * 100) / state.dailyWaterRate;

  //-----------------------

  const today = dateFns.format(new Date(), 'dd');
  const item = state.month.findIndex(
    (index) => index.dayOfMonth.toString() === today.toString()
  );

  state.month[item].percent = Math.round(
    state.dayWaterStat.percentageWaterAmount
  );
};
