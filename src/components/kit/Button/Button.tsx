import React from 'react';
import { Button, alpha, ButtonProps, CircularProgress, CircularProgressProps } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { darken } from '@mui/system';

interface IProps extends Omit<ButtonProps, 'color'> {
	loading?: boolean;
	rounded?: boolean;
	color?:
		| ButtonProps['color']
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'inherit'
		| 'primary';
	disableHover?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	rounded: {
		borderRadius: '1000rem',
	},
	disableHover: {
		'&:hover': {
			backgroundColor: 'inherit',
		},
	},
}));

const ButtonKit: React.FC<IProps> = React.forwardRef<HTMLButtonElement, IProps>((props, ref) => {
	const { loading, rounded, color, disableHover, disabled, endIcon, startIcon, ...rest } = props;

	const classes = useStyles();

	const circularProgressColor: CircularProgressProps['color'] =
		rest.variant == 'contained' ? 'inherit' : rest.variant === 'outlined' ? 'primary' : 'primary';

	return (
		<Button
			ref={ref}
			disabled={disabled || loading}
			startIcon={loading ? <CircularProgress color={circularProgressColor} size={20} /> : startIcon}
			endIcon={!loading && endIcon}
			color={disabled ? undefined : color}
			{...rest}
		>
			{props.children}
		</Button>
	);
});

export default ButtonKit;

ButtonKit.defaultProps = {};

ButtonKit.displayName = 'ButtonKit';
