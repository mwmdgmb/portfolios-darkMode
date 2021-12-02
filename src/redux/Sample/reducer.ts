import { Reducer } from 'redux';
import { ActionTypeEnum } from 'types/enums';
import ActionType from './actions';
import ReduxState from 'ReduxState';

interface IStateReducer {
	data: any;
	theme: string;
}

const initialState: IStateReducer = {
	data: [],
	theme: 'dark',
};

const reducer: Reducer<IStateReducer, ActionType> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypeEnum.sampleSuccess:
			return {
				...state,
				data: action.payload,
			};

		case ActionTypeEnum.changeThemeSuccess:
			localStorage.setItem('theme', `${action.payload}`);
			return {
				...state,
				theme: action.payload,
			};

		default:
			return state;
	}
};

const getUsersList = (state: ReduxState) => state.sample.data;
const getThemeSelector = (state: ReduxState) => state.sample.theme;

export { reducer as sample, getThemeSelector, getUsersList };
