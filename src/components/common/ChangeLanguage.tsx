import { MenuItem, TextField } from '@mui/material';
import { useLanguage } from 'hooks/useLanguage';
import React from 'react';

type TLanguage = string[];

const languagesList: TLanguage = ['fa', 'en'];

const LanguageBtn = () => {
	const { changeLanguage, lng } = useLanguage();
	const [lang, setLang] = React.useState<string>('');

	React.useEffect(() => {
		setLang(lng);
	}, [lng, setLang]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = (event.target as HTMLInputElement).value as string;

		changeLanguage(value);
	};

	return (
		<TextField
			id="outlined-select-currency"
			select
			label="Select"
			value={lang}
			onChange={handleChange}
			helperText="Please select your language"
		>
			{languagesList.map(option => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</TextField>
	);
};

export default LanguageBtn;
