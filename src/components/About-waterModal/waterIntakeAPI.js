import axios from 'axios';

const baseURL = 'https://water-backend-4k0b.onrender.com/api/water';

export const saveWaterIntake = async (amount, time) => {
  try {
    const response = await axios.post(baseURL, { waterAmount: amount, date: time });
    return response.data;
  } catch (error) {
    console.error('Error saving water intake:', error);
    throw error;
  }
};

export const updateWaterIntake = async (id, amount, time) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, { waterAmount: amount, date: time });
    return response.data;
  } catch (error) {
    console.error('Error updating water intake:', error);
    throw error;
  }
};

//Функція saveWaterIntake призначена для збереження даних про кількість випитої води та часу. Вона приймає два аргументи: amount (кількість випитої води) та time (час випиття). 
//Функція updateWaterIntake призначена для оновлення існуючих записів про випиту воду. Приймає три аргументи: id (ідентифікатор запису), amount (нова кількість випитої води) та time (новий час випиття).