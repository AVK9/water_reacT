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
