import { Grid, Container as ContainerMu } from '@mui/material';
import ActionCard from './ActionCard';
import CardServicio, { ICardServicioProps } from './CardServicio';
import { useState } from 'react';
import CardWeb from './CardWebs';

const PaginaWeb = require('../../../../../assets/images/pagina-web-ejemplo.jpg');

const Section3: React.FunctionComponent = () => {
	const [servicioActual, setServicioActual] = useState(1);

	const cards: ICardServicioProps[] = [
		{
			titulo: 'Desarrollo web',
			id: 1,
			imageSrc: PaginaWeb,
			paginas: [
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
			],
		},
		{
			titulo: 'Diseño Gráfico',
			id: 2,
			imageSrc: PaginaWeb,
			paginas: [
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
				{ imgSrc: PaginaWeb, link: '/' },
			],
		},
	];

	const cardActual = cards.find(c => c.id === servicioActual);

	return (
		<ContainerMu maxWidth={'xl'}>
			<Grid container spacing={8} paddingBottom={10}>
				<Grid item xs={12} md={5}>
					<ActionCard
						servicios={cards}
						setServicioActual={setServicioActual}
						servicioActual={servicioActual}
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<Grid container spacing={4}>
						{cards.map(card => (
							<Grid item xs={12} md={6} key={card.titulo}>
								<CardServicio
									{...card}
									isActive={
										servicioActual ===
										card.id
									}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			<Grid container paddingBottom={10} spacing={8}>
				{cardActual.paginas.map((p, i) => (
					<Grid key={i} item xs={12} lg={4} md={6}>
						<CardWeb {...p} />
					</Grid>
				))}
			</Grid>
		</ContainerMu>
	);
};

export default Section3;
