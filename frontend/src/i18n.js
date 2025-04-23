import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import auth from './locale/auth';
import chat from './locale/chat';

i18n.use(initReactI18next).init({
  resources: {
    ru: { auth, chat },
  },
  lng: 'ru',
  ns: ['auth', 'chat'],
  interpolation: { escapeValue: false },
});

export default i18n;
