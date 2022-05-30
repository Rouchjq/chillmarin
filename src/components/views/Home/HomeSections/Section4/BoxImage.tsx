import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { colors } from 'components/utils';
import * as React from 'react';
import { PaginaSelectedProps } from './dataSelect';

interface IBoxImageProps {
	pagina: PaginaSelectedProps;
}

const BoxImage: React.FunctionComponent<IBoxImageProps> = props => {
	const { pagina } = props;

	const handleClickVerMas = () => {
		window.open(pagina.ejemplo, '_blank');
	};
	return (
		<Box
			display={'block'}
			position={'relative'}
			style={{
				backgroundImage: 'url(imagenIsotipo.jpg)',
				backgroundSize: '100% 100%',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
				borderRadius: '20px',
			}}
			overflow={'hidden'}
			height={'100%'}
		>
			<Box
				position={'absolute'}
				bottom={0}
				width={'100%'}
				style={{ backdropFilter: 'blur(50px)' }}
			>
				<Box padding={'20px 30px'}>
					<Typography
						color={colors.white}
						fontWeight={600}
						variant={'h4'}
						letterSpacing={1}
					>
						{pagina.titulo}
					</Typography>
					<List>
						{pagina.requerimientos.map(requerimiento => (
							<ListItem disablePadding>
								<ListItemText
									style={{
										color: colors.white,
										fontSize: '10px',
									}}
								>
									{requerimiento}
								</ListItemText>
							</ListItem>
						))}
					</List>

					<Box
						display={'flex'}
						justifyContent={'center'}
						marginTop={2}
					>
						<Button
							variant={'contained'}
							color={'light'}
							onClick={handleClickVerMas}
							style={{
								borderRadius: '20px',
								width: '50%',
							}}
							size={'large'}
						>
							Ver Ejemplo
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default BoxImage;
