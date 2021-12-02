import { Switch, Box, Typography, Paper, TextField, MenuItem, Card } from '@mui/material';
import LanguageBtn from 'components/common/ChangeLanguage';
import { useLanguage } from 'hooks/useLanguage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, sampleActionRequest } from 'redux/Sample/actions';
import { getThemeSelector, getUsersList } from 'redux/Sample/reducer';
import { useQuery, gql, ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

interface RocketInventory {
	id: number;
	model: string;
	year: number;
	stock: number;
}

interface RocketInventoryData {
	rocketInventory: RocketInventory[];
}

interface RocketInventoryVars {
	year: number;
}

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache(),
});

const GET_ROCKET_INVENTORY = gql`
	query GetRocketInventory($year: Int!) {
		rocketInventory(year: $year) {
			id
			model
			year
			stock
		}
	}
`;

function RocketInventoryList() {
	const { loading, data } = useQuery<RocketInventoryData, RocketInventoryVars>(
		GET_ROCKET_INVENTORY,
		{ variables: { year: 2021 } },
	);
	return (
		<div>
			<h3>Available Inventory</h3>
			{loading ? (
				<p>Loading ...</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>Model</th>
							<th>Stock</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.rocketInventory.map(inventory => (
								<tr>
									<td>{inventory.model}</td>
									<td>{inventory.stock}</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	);
}

const HomePage = () => {
	const { t } = useLanguage();

	const dispatch = useDispatch();
	const getTheme = useSelector(getThemeSelector);
	// const usersList = useSelector(getUsersList);

	// const getUsersFN = React.useCallback(() => dispatch(sampleActionRequest({})), []);

	// React.useEffect(() => {
	// 	// getUsersFN();
	// 	dispatch(sampleActionRequest({}));
	// }, []);

	const texts = {
		paragraph: t('sample.paragraph'),
	};

	const handleChangeTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
		let value = evt.target.value as string;
		dispatch(changeTheme(value));
	};

	return (
		<ApolloProvider client={client}>
			<Paper style={{ borderRadius: '0', height: '100vh' }}>
				<Card>
					<Box p="15px">
						<TextField select label="Select" value={getTheme} onChange={handleChangeTheme}>
							{['dark', 'light'].map(option => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</TextField>
						<LanguageBtn />
						<Typography>{texts.paragraph}</Typography>
						<RocketInventoryList />
					</Box>
				</Card>
			</Paper>
		</ApolloProvider>
	);
};

export default HomePage;
