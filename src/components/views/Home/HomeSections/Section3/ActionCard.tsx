import { ICardServicioProps } from './CardServicio';
import * as React from 'react';
import { colors } from '../../../../utils';
import { RiArrowRightFill, RiArrowLeftFill } from 'react-icons/ri';
import { ButtonPrimaryRounded } from '../../../../layout/common/Buttons';
import { Box, Grid, Typography } from '@mui/material';

interface IActionCardProps {
	servicios: ICardServicioProps[];
	setServicioActual(value: number): void;
	servicioActual: number;
}

const ActionCard: React.FunctionComponent<IActionCardProps> = props => {
	const { servicios, setServicioActual, servicioActual } = props;

	const handleClickButtonPrev = () => {
		const prevServicio = servicioActual - 1;
		if (prevServicio === 0) return setServicioActual(servicios.length);
		setServicioActual(prevServicio);
	};

	const handleClickButtonNext = () => {
		const nextServicio = servicioActual + 1;
		if (!servicios.find(s => s.id === nextServicio)) return setServicioActual(1);
		setServicioActual(nextServicio);
	};

	return (
		<Box marginBottom={3}>
			<Typography
				variant="h3"
				color={colors.darkcyan}
				fontWeight={900}
				textAlign={'center'}
				marginBottom={15}
			>
				Nuestros servicios
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={6} textAlign={'end'}>
					<ButtonPrimaryRounded onClick={handleClickButtonPrev}>
						<RiArrowLeftFill
							color={colors.darkcyan}
							size={50}
							style={{ marginRight: '5px' }}
						/>
					</ButtonPrimaryRounded>
				</Grid>
				<Grid item xs={6}>
					<ButtonPrimaryRounded
						background={true}
						onClick={handleClickButtonNext}
					>
						<RiArrowRightFill color={'white'} size={50} />
					</ButtonPrimaryRounded>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ActionCard;
