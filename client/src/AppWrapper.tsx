import {createTheme, ThemeProvider} from '@mui/material/styles';
import {SnackbarProvider} from 'notistack';
import {HashRouter} from 'react-router-dom';
import App from './App';
import {ApiContextProvider} from './context/ApiContext';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const AppWrapper = () => {
	return <ThemeProvider theme={theme}>
		<HashRouter>
			<SnackbarProvider>
				<ApiContextProvider>
					<App/>
				</ApiContextProvider>
			</SnackbarProvider>
		</HashRouter>
	</ThemeProvider>;
};
