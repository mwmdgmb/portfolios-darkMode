import React from 'react';
import { Box, Paper } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

interface IBaseLayoutProps {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingTop: '1rem',
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
			height: '100vh',
		},
	}),
);

const Baselayout: React.FC<IBaseLayoutProps> = ({ children }) => {
	const classes = useStyles();

	return <Box className={classes.root}>{children}</Box>;
};

export default Baselayout;
