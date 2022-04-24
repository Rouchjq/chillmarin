import { Logo, MenuContainer } from './styles';
import { Container as ContainerMu } from '@mui/material';
import MenuButton from './MenuButton';
import { Box } from '@mui/material';
const chillmarin = require('../../../../assets/images/Chillmarin -03.png');

const Navbar = () => (
	<Box py={2}>
		<ContainerMu
			maxWidth={'xl'}
			style={{ display: 'flex', justifyContent: 'space-between' }}
		>
			<Logo>
				<img src={chillmarin} alt="logo chillmarin" />
			</Logo>

			<MenuContainer>
				<MenuButton />
			</MenuContainer>
		</ContainerMu>
	</Box>
);

export default Navbar;
