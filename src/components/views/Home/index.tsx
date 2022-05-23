import { Footer } from 'components/layout/app/Footer';
import Header from '../../layout/app/Header/Index';
import Section1 from './HomeSections/Section1';
import Section2 from './HomeSections/Section2';
import Section3 from './HomeSections/Section3';
import Section4 from './HomeSections/Section4';
import Section5 from './HomeSections/Section5';
import { Section6 } from './HomeSections/Section6';

const Home: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Footer />
		</>
	);
};

export default Home;
