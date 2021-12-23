import { Reducer } from 'redux';
import { ActionTypeEnum } from 'types/enums';
import ActionType from './actions';
import ReduxState from 'ReduxState';
import { ISampleResDTO } from 'types/DTO/Sample';

interface IStateReducer {
	data: ISampleResDTO['data'];
	theme: string;
	loading: boolean;
}

const initialState: IStateReducer = {
	data: [],
	theme: 'dark',
	loading: false,
};

const reducer: Reducer<IStateReducer, ActionType> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypeEnum.sampleRequest:
			return {
				...state,
				loading: true,
			};

		case ActionTypeEnum.sampleSuccess:
			return {
				...state,
				data: action.payload,
				loading: false,
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

const getUsersList = (state: ReduxState) => ({
	data: state.sample.data,
	loading: state.sample.loading,
});
const getThemeSelector = (state: ReduxState) => state.sample.theme;

export { reducer as sample, getThemeSelector, getUsersList };
