export const LANGUAGES = {
  en: 'English',
  th: 'ไทย',
}

export const getDefaultLanguage = () => {
  try {
    const i18nextLng = localStorage.getItem('i18nextLng')
    if (Object.keys(LANGUAGES).includes(i18nextLng)) {
      return i18nextLng
    }
  } catch (err) {
    console.error(err)
  }

  return 'en'
}
