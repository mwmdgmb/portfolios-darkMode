import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import asyncComponent from 'utils/asyncComponent';

const Routing: React.FC<RouteComponentProps> = props => {
	return (
		<Switch>
			<Route path={'/'} exact component={asyncComponent(() => import('./Pages/Home'))} />
			<Redirect from="*" to="/" />
		</Switch>
	);
};

export default Routing;
