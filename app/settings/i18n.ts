import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// importa os JSONs
import en from '../locales/en/translation.json';
import pt from '../locales/pt/translation.json';
import es from '../locales/es/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'pt',

  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
    es: {
      translation: es,
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
