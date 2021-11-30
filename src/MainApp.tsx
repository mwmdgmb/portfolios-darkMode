import React from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './utils/ScrollToTop';
import SplashScreen from './containers/SplashScreen';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, ReactReduxContext } from 'react-redux';
import configureStore, { history } from './redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './i18n/i18n';
import { Paper, Switch, Typography } from '@mui/material';

export const store = configureStore();

function MainApp() {
	const [toggleDark, settoggleDark] = React.useState(false);
	const { i18n } = useTranslation();
	document.body.dir = i18n.dir();

	const handleModeChange = () => {
		settoggleDark(!toggleDark);
	};

	const myTheme = createTheme({
		// Theme settings
		palette: {
			mode: toggleDark ? 'dark' : 'light',
		},
	});

	return (
		<ThemeProvider theme={myTheme}>
			<Switch checked={toggleDark} onChange={handleModeChange} name="toggleDark" color="default" />
			<Paper>
				<Typography variant="h1">This is a h1 text</Typography>

				<Typography variant="body2">This is a body2 text</Typography>
			</Paper>
			<Provider store={store} context={ReactReduxContext}>
				<ConnectedRouter history={history} context={ReactReduxContext}>
					<ScrollToTop />
					<React.Suspense fallback={<SplashScreen />}>
						<Route path="/" component={React.lazy(() => import('./containers/App'))} />
					</React.Suspense>
				</ConnectedRouter>
			</Provider>
		</ThemeProvider>
	);
}

export default MainApp;
