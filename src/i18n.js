import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationMN from './locales/mn/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  mn: { translation: translationMN },
  en: { translation: translationEN },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mn', // default хэл
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;