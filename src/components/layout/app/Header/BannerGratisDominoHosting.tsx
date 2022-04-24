import { colors } from '../../../utils';
import styled from 'styled-components';
import * as React from 'react';

interface IBannerGratisDominioHostingProps {}

const BannerGratisDominioHostingContainer = styled.div`
	padding: 0px 0 0px 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: rgb(44, 180, 139);
	background: ${colors.greenGradient};
	p {
		margin: 0;
		color: white;
		letter-spacing: 1px;
	}
`;

const Divider = styled.div`
	width: 2px;
	height: 25px;
	background-color: white;
	margin: 5px 0px;
`;

const BannerGratisDominioHosting: React.FunctionComponent<
	IBannerGratisDominioHostingProps
> = () => (
	<BannerGratisDominioHostingContainer>
		<p>dominio y hosting gratis por 1 año</p>
		<Divider />
		<p>dominio y hosting gratis por 1 año</p>
		<Divider />
		<p>dominio y hosting gratis por 1 año</p>
	</BannerGratisDominioHostingContainer>
);

export default BannerGratisDominioHosting;
