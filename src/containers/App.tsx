import { Switch, Route, Redirect } from 'react-router-dom';
import Routing from '../app/index';

const App = () => {
	return (
		<Switch>
			<Route path={'/'} exact component={Routing} />
			<Redirect from="*" to="/" />
		</Switch>
	);
};

export default App;
