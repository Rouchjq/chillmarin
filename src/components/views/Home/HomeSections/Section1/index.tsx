import styled from 'styled-components';
import TextoBanner from './TextoBanner';
import ImageBanner from './ImageBanner';
import { Grid, Container as ContainerMU } from '@mui/material';

const Section1Container = styled(ContainerMU)`
	padding: 200px 0px 300px 0px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 900px) {
		padding: 50px 0px;
	}
`;

const Section1 = () => (
	<Section1Container maxWidth={'xl'}>
		<Grid container spacing={1}>
			<Grid item xs={12} md={6}>
				<TextoBanner />
			</Grid>
			<Grid item xs={12} md={6}>
				<ImageBanner />
			</Grid>
		</Grid>
	</Section1Container>
);

export default Section1;
