import Home from './components/views/Home';
import * as React from 'react';
import ModalState from 'context/modal/ModalState';

const App: React.FunctionComponent = () => (
	<ModalState>
		<Home></Home>
	</ModalState>
);

export default App;
