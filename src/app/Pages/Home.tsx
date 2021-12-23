import { Box, Typography, TextField, MenuItem, Grid } from '@mui/material';
import LanguageBtn from 'components/common/ChangeLanguage';
import Baselayout from 'containers/layout/baseLayout';
import { useLanguage } from 'hooks/useLanguage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, sampleActionRequest } from 'redux/Sample/actions';
import { getThemeSelector, getUsersList } from 'redux/Sample/reducer';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		spacing: {
			padding: '1rem',
		},
	}),
);

const HomePage = () => {
	const { t } = useLanguage();
	const classes = useStyles();
	const dispatch = useDispatch();
	const getTheme = useSelector(getThemeSelector);
	const { loading, data } = useSelector(getUsersList);

	React.useLayoutEffect(() => {
		dispatch(sampleActionRequest({}));
	}, [dispatch]);

	const texts = {
		paragraph: t('sample.paragraph'),
		loading: t('sample.loading'),
		delay: t('sample.delay'),
	};

	const handleChangeTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
		let value = evt.target.value as string;
		dispatch(changeTheme(value));
	};

	return (
		<Baselayout>
			<Grid container>
				<Grid item xs={12}>
					{/* can use pt */}
					<Box className={classes.spacing}>
						<TextField select label="Select" value={getTheme} onChange={handleChangeTheme}>
							{['dark', 'light'].map(option => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box className={classes.spacing}>
						<LanguageBtn />
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box className={classes.spacing}>
						<Typography>{texts.paragraph}</Typography>
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box className={classes.spacing}>
						{loading ? (
							<>
								{t(texts.loading)}({t(texts.delay)})
							</>
						) : (
							<Grid item xs={12}>
								{data.map(item => item.name)}
							</Grid>
						)}
					</Box>
				</Grid>
			</Grid>
		</Baselayout>
	);
};

export default HomePage;
