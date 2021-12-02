import { Switch, Route, Redirect } from 'react-router-dom';
import Routing from '../app/index';
import withRoot from './withRoot';

const App = () => {
	return (
		<Switch>
			<Route path={'/'} exact component={Routing} />
			<Redirect from="*" to="/" />
		</Switch>
	);
};

export default withRoot(App);
