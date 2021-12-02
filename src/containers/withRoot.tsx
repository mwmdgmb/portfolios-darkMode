import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import i18n from '../i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getThemeSelector } from 'redux/Sample/reducer';
import { PaletteMode } from '@mui/material';
import { changeTheme } from 'redux/Sample/actions';

function withRoot(Component: React.FC) {
	function WithTheme(props: any) {
		const getTheme = useSelector(getThemeSelector);
		const dispatch = useDispatch();

		React.useMemo(() => {
			let theme = localStorage.getItem('theme');

			if (theme) {
				dispatch(changeTheme(theme));
			} else {
				localStorage.setItem('theme', 'dark');
			}
		}, [getTheme]);


		return (
			<ThemeProvider
				theme={createTheme({
					// Theme settings
					palette: {
						mode: getTheme as PaletteMode,
					},
				})}
			>
				<Component {...props} />
			</ThemeProvider>
		);
	}

	return WithTheme;
}

export default withRoot;
