import { Reducer } from 'redux';
import { ActionTypeEnum } from 'types/enums';
import ActionType from './actions';
import ReduxState from 'ReduxState';

interface IStateReducer {
	data: Record<string, any>[];
	theme: string;
}

const initialState: IStateReducer = {
	data: [],
	theme: 'light',
};

const reducer: Reducer<IStateReducer, ActionType> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypeEnum.sampleSuccess:
			return {
				...state,
				data: action.payload,
			};

		// case ActionTypeEnum.changeThemeSuccess:
		// return {
		//   ...state,
		//   theme: payload
		// }

		default:
			return state;
	}
};

const getList = (state: ReduxState) => state.sample.data;
const getTheme = (state: ReduxState) => state.sample.theme;

export { reducer as sample, getTheme, getList };
