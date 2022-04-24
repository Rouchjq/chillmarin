import { Card as CardMu, CardContent } from '@mui/material';
import { colors } from '../../../../utils';
import styled from 'styled-components';
import { ButtonPrimary } from '../../../../layout/common/Buttons';
import * as React from 'react';

export interface ICardWebProps {
	imgSrc: string;
	link: string;
}

const Card = styled(CardMu)`
	position: relative;
	padding: 0;
	img {
		user-select: none;
	}
	.cardHover {
		position: absolute;
		top: 0;
		border-radius: 10px;
		z-index: 5;
		width: 100%;
		height: 100%;
		background: ${colors.greenGradientTransparent};
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const CardWeb: React.FunctionComponent<ICardWebProps> = props => {
	const { imgSrc, link } = props;
	const [isShown, setIsShown] = React.useState(false);

	const onMouseEnter = () => setIsShown(true);
	const onMouseLeave = () => setIsShown(false);

	return (
		<Card
			style={{ borderRadius: '10px' }}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<CardContent style={{ padding: 0 }}>
				<img
					src={imgSrc}
					alt={'Pagina web'}
					style={{ width: '100%', borderRadius: '10px' }}
				/>

				<div className={`cardHover ${isShown ? 'fadeIn' : 'fadeOut'}`}>
					<ButtonPrimary>Ver Sitio web</ButtonPrimary>
				</div>
			</CardContent>
		</Card>
	);
};

export default CardWeb;
