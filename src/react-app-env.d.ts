/// <reference types="react-scripts" />

declare module 'ReduxState' {
	type ReduxState = ReturnType<ReturnType<typeof import('./redux/rootReducer').default>>;
	export default ReduxState;
}

declare module 'react-lightgallery';

declare module '@fullpage/react-fullpage';
