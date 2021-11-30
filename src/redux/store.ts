import ApplicationState from 'ReduxState';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import reducers from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory<string>();

export default function configureStore() {
	// History initialization
	// Redux middlewares
	const routeMiddleware = routerMiddleware(history);
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [routeMiddleware, sagaMiddleware];
	
	const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)));

	sagaMiddleware.run(rootSaga);
	return store;
}
