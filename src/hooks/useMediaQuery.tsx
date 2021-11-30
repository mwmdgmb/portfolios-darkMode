import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useCustomMediaQuery = () => {
	const theme = useTheme();

	const isMobile: boolean = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
	const isTablet: boolean = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
	const isFullScreen: boolean = useMediaQuery(theme.breakpoints.between(1201, 3000));

	return {
		isMobile,
		isTablet,
		isFullScreen,
	};

	// const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
	// const isXsUp = useMediaQuery(theme.breakpoints.up('xs'));
	// const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
	// const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
	// const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
	// const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
	// const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
	// const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
	// const isXlDown = useMediaQuery(theme.breakpoints.down('xl'));
	// const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));

	// return {
	// 	isXsDown,
	// 	isXsUp,
	// 	isSmDown,
	// 	isSmUp,
	// 	isMdDown,
	// 	isMdUp,
	// 	isLgDown,
	// 	isLgUp,
	// 	isXlDown,
	// 	isXlUp,
	// };
};

export default useCustomMediaQuery;
