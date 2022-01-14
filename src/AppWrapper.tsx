import {createTheme, ThemeProvider} from '@mui/material/styles';
import App from './App';

const theme = createTheme({
	//
})

export const AppWrapper = () => {
	return <ThemeProvider theme={theme}>
		<App/>
	</ThemeProvider>
}
