import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: {
        'Welcome to React': 'Ласкаво просимо до React',
        'My daily norma': 'Моя щоденна норма',
        Edit: 'Редагувати',
        'Why drink water': 'Чому потрібно пити воду',
        'Supply of nutrients to all organs':
          'Постачання поживних речовин до всіх органів',
        'Providing oxygen to the lungs': 'Забезпечення киснем легені',
        'Maintaining the work of the heart': 'Підтримка роботи серця',
        'Release of processed substances': 'Виведення оброблених речовин',
        'Ensuring the stability of the internal environment':
          'Забезпечення стабільності внутрішнього середовища',
        'Maintaining within the normal temperature':
          'Підтримка в межах нормальної температури',
        'Maintaining an immune system capable of resisting disease':
          'Підтримка імунної системи, здатної протистояти хворобам',
        'Water consumption tracker': 'Трекер споживання води',
        'Record daily water intake and track':
          'Щоденне відстеження споживання води',
        'Tracker Benefits': 'Переваги трекера',
        'Habit drive': 'Формування звички',
        'View statistics': 'Перегляд статистики',
        'Personal rate setting': 'Налаштування персональної норми',
        'Try Tracker': 'Спробувати трекер',
        'Sign In': 'Увійти',
        'Enter your email': 'Введіть ваш email',
        'Enter your password': 'Введіть ваш пароль',
        'Sign Up': 'Зареєструватися',
        'Email is invalid': 'Email недійсний',
        'Password is invalid': 'Пароль недійсний',
        'For girl': 'Для дівчини',
        'For man': 'Для чоловіка',
        'Calculate your rate': 'Розрахуйте свій тариф',
        'For woman': 'Для жінки',
        'Your weight in kilograms': 'Ваша вага в кілограмах',
        'The time of active participation in sports or other activities with a high physical load in hours':
          'Час активної участі в спорті або інших заняттях з високим фізичним навантаженням у годинах',
        'The required amount of water in liters per day':
          'Необхідна кількість води в літрах на день',
        'Write down how much water you will drink in liters':
          'Запишіть, скільки води ви будете пити в літрах',
        'V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)':
          'V - це норма води в літрах на день, M - ваша вага, T - час активних видів спорту або іншої діяльності, що відповідає за навантаження (у відсутності цих, ви повинні встановити 0)',
        Save: 'Зберегти',
        'Daily norma:': 'Щоденна норма',
        'Fulfillment of the daily norm:': 'Виконання щоденної норми',
        'How many servings of water:': 'Скільки порцій води',
        'Delete entry': 'Видалити запис',
        'Are you sure you want to delete the entry?':
          'Ви впевнені, що хочете видалити запис?',
        Delete: 'Видалити',
        Cancel: 'Скасувати',
        'Edit the entered amount of water': 'Редагувати введену кількість води',
        'No notes yet': 'Немає записів',
        'Correct entered data:': 'Виправте введені дані:',
        'Amount of water:': 'Кількість води:',
        'Recording time:': 'Час запису:',
        'Enter the value of the water used:':
          'Введіть кількість використаної води:',
        'Water amount cannot be 0 ml': 'Кількість води не може бути 0 мл',
        'Error saving water intake:': 'Помилка при збереженні водного прийому:',
        'Loading pleasure wait': 'Завантаження, будь ласка, зачекайте',
        'Error:': 'Помилка:',
        Month: 'Місяць',
        'No water': 'Немає води',
        Setting: 'Налаштування',
        'Your photo': 'Ваше фото',
        'Upload a photo': 'Завантажити фото',
        'Loading...': 'Завантаження...',
        'Information Updated Successfully!': 'Інформація успішно оновлена!',
        'Error Updating Information': 'Помилка при оновленні інформації',
        'max length 32': 'максимальна довжина 32',
        'Email is not valid': 'Email не є дійсним',
        'Password must be at least 6 characters':
          'Пароль повинен бути не менше 6 символів',
        'Max length 64': 'Максимальна довжина 64',
        'The new password must differ from the old one.':
          'Новий пароль повинен відрізнятися від старого',
        'Passwords do not match.': 'Паролі не співпадають',
        'Your gender identity:': 'Ваша гендерна ідентичність:',
        Woman: 'Жінка',
        Man: 'Чоловік',
        'Your name': "Ваше ім'я",
        'New Password:': 'Новий пароль:',
        Password: 'Пароль',
        'Outdate password:': 'Старий пароль:',
        'Repeat new Password:': 'Повторіть новий пароль:',
        'Only JPG files are allowed.': 'Дозволені лише файли JPG.',
        'Error updating avatar:': 'Помилка при оновленні аватара:',
        Today: 'Сьогодні',
        '+ Add Water': '+ Додати воду',
        'Log out': 'Вийти',
        'Do you really want to leave?': 'Ви дійсно хочете вийти?',
        'Add water': 'Додати воду',
        'This email is already registered':
          'Цей електронна пошта вже зареєстрована',
        'Invalid email address': 'Недійсна адреса електронної пошти',
        Required: "Обов'язково",
        'Passwords must match': 'Паролі повинні співпадати',
        'Repeat password': 'Повторіть пароль',
        'Repeat Password': 'Повторіть пароль',
        Name: "Ім'я",
        'Old password': 'Старий пароль',
        'New Password': 'Новий пароль',
        'Repeat new password': 'Повторіть новий пароль',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
