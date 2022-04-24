import styled from 'styled-components';
import * as React from 'react';

const logo = require('../../../../../assets/images/Chillmarin -07.png');

interface IImageBannerProps {}

const Container = styled.div`
	text-align: center;
	img {
		max-width: 300px;
	}
`;

const ImageBanner: React.FunctionComponent<IImageBannerProps> = () => (
	<Container>
		<img src={logo} alt="imagen logo chillmarin" />
	</Container>
);

export default ImageBanner;
