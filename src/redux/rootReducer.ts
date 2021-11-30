import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';

import { sample } from './Sample/reducer';

const rootReducer = (history: History<string>) => {
	return combineReducers({
		router: connectRouter<string>(history),
		sample
	});
};

export default rootReducer;
