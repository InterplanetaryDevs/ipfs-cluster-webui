import {createTheme, ThemeProvider} from '@mui/material/styles';
import {SnackbarProvider} from 'notistack';
import {HashRouter} from 'react-router-dom';
import App from './App';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const AppWrapper = () => {
	return <ThemeProvider theme={theme}>
		<HashRouter>
			<SnackbarProvider>
				<App/>
			</SnackbarProvider>
		</HashRouter>
	</ThemeProvider>;
};
