import { ICardServicioProps } from './CardServicio';
import * as React from 'react';
import { colors } from '../../../../utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
		console.log(servicios.length);
		if (prevServicio === 0) return setServicioActual(servicios.length);
		setServicioActual(prevServicio);
	};

	const handleClickButtonNext = () => {
		const nextServicio = servicioActual + 1;
		if (!servicios.find(s => s.id === nextServicio)) return setServicioActual(1);
		setServicioActual(nextServicio);
	};

	console.log(servicioActual);

	return (
		<Box marginBottom={3}>
			<Typography
				variant="h3"
				color={colors.darkcyan}
				fontWeight={900}
				textAlign={'center'}
				marginBottom={20}
			>
				Nuestros servicios
			</Typography>

			<Grid container>
				<Grid item xs={6}>
					<Box textAlign={'center'}>
						<ButtonPrimaryRounded
							onClick={handleClickButtonPrev}
						>
							<FaArrowLeft
								color={colors.darkcyan}
								size={18}
							/>
						</ButtonPrimaryRounded>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box textAlign={'center'}>
						<ButtonPrimaryRounded
							background={true}
							onClick={handleClickButtonNext}
						>
							<FaArrowRight color={'white'} size={18} />
						</ButtonPrimaryRounded>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ActionCard;
