import React from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './utils/ScrollToTop';
import SplashScreen from './containers/SplashScreen';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, ReactReduxContext } from 'react-redux';
import configureStore, { history } from './redux/store';

import './i18n/i18n';
import { Paper, Typography } from '@mui/material';

export const store = configureStore();

function MainApp() {
	const { i18n } = useTranslation();
	document.body.dir = i18n.dir();



	return (
			<Provider store={store} context={ReactReduxContext}>
				<ConnectedRouter history={history} context={ReactReduxContext}>
					<ScrollToTop />
					<React.Suspense fallback={<SplashScreen />}>
						<Route path="/" component={React.lazy(() => import('./containers/App'))} />
					</React.Suspense>
				</ConnectedRouter>
			</Provider>
	);
}

export default MainApp;
