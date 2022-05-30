import { colors } from '../../utils';
import { ThemeOptions } from '@mui/system';
import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
	interface Palette {
		dark: SimplePaletteColorOptions;
		light: SimplePaletteColorOptions;
	}
	interface PaletteOptions {
		dark: SimplePaletteColorOptions;
		light: SimplePaletteColorOptions;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		dark: true;
		light: true;
	}
}

declare module '@mui/material/TextField' {
	interface TextFieldPropsColorOverrides {
		dark: true;
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: colors.green,
			contrastText: colors.white,
		},
		secondary: {
			main: colors.green,
		},
		warning: {
			main: colors.warning,
		},
		text: {
			primary: colors.white,
			secondary: colors.green,
		},
		dark: {
			main: colors.dark,
		},
		light: {
			main: colors.white,
			contrastText: colors.green,
		},
	},
	components: { MuiInputBase: { styleOverrides: { root: { color: colors.dark } } } },
	typography: {
		fontFamily: ['"Poppins"', '"Helvetica Neue"'].join(','),
	},
});

export default theme;
