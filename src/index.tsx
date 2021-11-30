import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import './config';

const rootEl = document.getElementById('root') as HTMLElement;

let render = () => {
	ReactDOM.render(
		<React.StrictMode>
			<MainApp />
		</React.StrictMode>,
		rootEl,
	);
};

render();
