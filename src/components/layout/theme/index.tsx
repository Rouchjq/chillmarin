import { colors } from '../../utils';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: colors.darkcyan,
		},
		secondary: {
			main: colors.green,
		},
	},
	typography: {
		fontFamily: ['"Poppins"', '"Helvetica Neue"'].join(','),
	},
});

export default theme;
