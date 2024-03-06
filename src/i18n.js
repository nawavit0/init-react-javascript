import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { getDefaultLanguage } from 'src/utils/language'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: getDefaultLanguage(),
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    cache: {
      enabled: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
    },
  })

export default i18n
