import * as React from 'react';
import { colors } from 'components/utils';
import { Box, Button, Container, Grid, List, Typography } from '@mui/material';
import { dataSelects, PaginaSelectedProps } from './dataSelect';
import FormReunion from './FormReunion';
import ListItemPage from './ListItemPage';
import { useModalContext } from 'context/modal/ModalState';
import useWindowSize from 'hooks/useWindowSize';
import BoxImage from './BoxImage';
const Section4: React.FunctionComponent = () => {
	const WindowSize = useWindowSize();
	const { desarrolloWeb } = dataSelects;
	const [seleccionado, setSeleccionado] = React.useState<PaginaSelectedProps>(
		desarrolloWeb.paginaCorporativa
	);

	const { setModal } = useModalContext();

	const handleClickReunion = () => {
		const titulo = 'Solicitar reunión';
		const initialValueTextArea = `Hola! equipo de Chillmarin ya sé que es lo que necesito, quiero reunirme para tener más información y solicitar un presupuesto`;
		setModal({
			titulo,
			size: 'xl',
			content: (
				<FormReunion
					titulo={titulo}
					initialValueTextArea={initialValueTextArea}
				/>
			),
		});
	};

	const handleClickAsesoria = () => {
		const titulo = 'Solicitar asesoría';
		const initialValueTextArea = `Hola! equipo de Chillmarin, necesito ayuda para determinar qué tipo de página necesito y/o requiero algo más personalizado. Me comunico para agendar una asesoría`;
		setModal({
			titulo,
			size: 'xl',
			content: (
				<FormReunion
					titulo={titulo}
					initialValueTextArea={initialValueTextArea}
				/>
			),
		});
	};
	return (
		<Container maxWidth={'xl'}>
			<Grid container spacing={10}>
				{WindowSize.width >= 1200 ? (
					<Grid item xs={12} lg={6}>
						<BoxImage pagina={seleccionado} />
					</Grid>
				) : null}

				<Grid item xs={12} lg={6}>
					<Typography
						color={colors.darkBlue}
						variant={'h2'}
						fontWeight={600}
					>
						Proyectos digitales
					</Typography>
					<Typography
						color={colors.darkBlue}
						variant={'h3'}
						fontWeight={500}
					>
						que realizamos
					</Typography>

					<Box marginTop={5} paddingX={6}>
						<Typography
							color={colors.green}
							variant={'h4'}
							fontWeight={600}
						>
							Desarrollo web
						</Typography>
						<List>
							{Object.keys(desarrolloWeb).map(
								(key, index) => (
									<ListItemPage
										pagina={
											/* @ts-ignore */
											desarrolloWeb[
												key
											]
										}
										key={index}
										setSeleccionado={
											setSeleccionado
										}
										seleccionado={
											seleccionado
										}
									/>
								)
							)}
						</List>

						<Typography
							color={colors.green}
							variant={'h4'}
							fontWeight={600}
						>
							Diseño Gráfico
						</Typography>
					</Box>

					<Grid container spacing={4} marginTop={1}>
						<Grid
							item
							xs={6}
							display={'flex'}
							justifyContent={'flex-end'}
						>
							<Box width={'100%'}>
								<Typography
									color={'GrayText'}
									variant={'subtitle2'}
								>
									Ya sé que tipo necesito
								</Typography>
								<Button
									color={'warning'}
									variant={'contained'}
									style={{
										boxShadow: colors.boxShadowButton,
										borderRadius:
											'10px',
									}}
									fullWidth
									size={'large'}
									onClick={handleClickReunion}
								>
									Solicitar reunión
								</Button>
							</Box>
						</Grid>

						<Grid item xs={6} display={'flex'}>
							<Box width={'100%'}>
								<Typography
									color={'GrayText'}
									variant={'subtitle2'}
								>
									Aún no sé que tipo necesito
								</Typography>
								<Button
									variant={'outlined'}
									color={'dark'}
									style={{
										borderRadius:
											'10px',
									}}
									size={'large'}
									fullWidth
									onClick={
										handleClickAsesoria
									}
								>
									Solicitar asesoría
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Section4;
