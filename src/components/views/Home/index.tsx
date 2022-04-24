import Header from '../../layout/app/Header/Index';
import Section1 from './HomeSections/Section1';
import Section2 from './HomeSections/Section2';
import Section3 from './HomeSections/Section3';
import Section4 from './HomeSections/Section4';
import Section5 from './HomeSections/Section5';
import * as React from 'react';

const Home: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
		</>
	);
};

export default Home;
