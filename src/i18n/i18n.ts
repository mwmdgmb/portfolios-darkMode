import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import FA from './fa/fa.json';
import EN from './en/en.json';

const resources: Resource = {
	fa: {
		translation: FA,
	},
	en: {
		translation: EN,
	},
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en-us',
		lng: 'en',
		resources,
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: true,
		},
	});

export default i18n;
