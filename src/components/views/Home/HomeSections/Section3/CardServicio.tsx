import { Card as CardMu, CardContent } from '@mui/material';
import { colors } from '../../../../utils';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { ButtonPrimary } from '../../../../layout/common/Buttons/ButtonPrimary';
import { SlideDown } from 'react-slidedown';
import { FunctionComponent } from 'react';
import { ICardWebProps } from './CardWebs';

export interface ICardServicioProps {
	titulo: string;
	id: number;
	isActive?: boolean;
	imageSrc: string;
	paginas?: ICardWebProps[];
}

const HeaderCard = styled.header`
	h2 {
		padding: 10px 15px;
		font-size: 2.5rem;
		color: ${colors.lightgray};
	}
`;

const ImgContainer = styled.div`
	text-align: center;
`;

const Card = styled(CardMu)`
	transition: all 500ms linear;
	transform: scale(0.9);
	&.active {
		transform: scale(1);
	}
	.react-slidedown {
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.04, 0.02, 1, 0.99);
	}
`;

const CardServicio: FunctionComponent<ICardServicioProps> = props => {
	const { titulo, isActive, imageSrc } = props;
	return (
		<Card className={isActive ? 'active' : ''}>
			<CardContent style={{ background: `rgb(26, 32, 39)` }}>
				<HeaderCard>
					<h2>{titulo}</h2>
				</HeaderCard>

				<ImgContainer>
					<img src={imageSrc} alt={'Imagen Pagina web'} width={250} />
				</ImgContainer>

				<SlideDown>
					{isActive ? (
						<Box textAlign={'center'} marginTop={3}>
							<ButtonPrimary>Ver más</ButtonPrimary>
						</Box>
					) : null}
				</SlideDown>
			</CardContent>
		</Card>
	);
};

export default CardServicio;
