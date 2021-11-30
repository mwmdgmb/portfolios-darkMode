import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default function asyncComponent(
	importComponent: any,
	componentsProps: any = {},
	Loader: () => JSX.Element = () => <>JSX Loading...</>,
) {
	return class extends Component<RouteComponentProps, { component: null | any }> {
		state = {
			component: null,
		};

		async componentDidMount() {
			const { default: Component } = await importComponent();
			this.setState({
				component: <Component {...this.props} {...componentsProps} />,
			});
		}
		render() {
			return this.state.component || <Loader />;
		}
	};
}
