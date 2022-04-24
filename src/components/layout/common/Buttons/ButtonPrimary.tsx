import { Button } from '@mui/material';
import { colors } from '../../../utils';
import * as React from 'react';

interface OnclickProps extends React.MouseEvent<HTMLInputElement> {
	target: HTMLInputElement;
}

interface IButtonPrimaryProps {
	children?: React.ReactNode;
	onClick?(e: OnclickProps): void;
}

export const ButtonPrimary: React.FunctionComponent<IButtonPrimaryProps> = props => (
	<Button
		onClick={props.onClick}
		variant={'contained'}
		size={'medium'}
		color={'primary'}
		style={{ paddingLeft: '50px', paddingRight: '50px' }}
	>
		{props.children}
	</Button>
);

interface IButtonPrimaryRounded extends IButtonPrimaryProps {
	background?: boolean;
}

export const ButtonPrimaryRounded: React.FunctionComponent<IButtonPrimaryRounded> = props => (
	<Button
		onClick={props.onClick}
		variant={props.background ? 'contained' : 'outlined'}
		size={'large'}
		color={'primary'}
		style={{
			borderRadius: '75%',
			padding: '25px',
			border: props.background ? 0 : `3px solid ${colors.darkcyan}`,
		}}
	>
		{props.children}
	</Button>
);
