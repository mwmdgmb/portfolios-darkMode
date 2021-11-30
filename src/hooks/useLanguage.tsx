import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

export const useLanguage = () => {
	const { t, i18n } = useTranslation();

	const theme = useTheme();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		document.body.dir = i18n.dir();
		theme.direction = i18n.dir();
	};

	return { changeLanguage, t, lng: i18n.language };
};
