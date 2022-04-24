import styled from 'styled-components';
import { colors } from '../../../../utils';
import * as React from 'react';

interface ITextoBannerProps {}

const TitleBox = styled.div`
	h1 {
		font-size: 4rem;
		margin: 0;
		font-family: 'Staatliches' cursive;
		color: ${colors.blue};
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
`;

const TextBox = styled.div`
	font-size: 1.2rem;
	margin: 20px 0px;
	color: #525252;
`;

const TextoBanner: React.FunctionComponent<ITextoBannerProps> = () => (
	<div>
		<TitleBox>
			<h1>Realizamos tu proyecto digital</h1>
		</TitleBox>
		<TextBox>
			<p>
				Nos adaptamos a tus ideas y las hacemos realidad, nos preocupamos en
				manejar la última tecnología y las mejores estructuras para que tu
				proyecto sea todo un éxito.
			</p>
		</TextBox>
	</div>
);

export default TextoBanner;
