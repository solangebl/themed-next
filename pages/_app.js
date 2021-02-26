import { ThemeProvider } from 'styled-components';
import StyledPage from '../components/styles/StyledPage';
import pinkTheme from '../lib/themes/pink';
import greenTheme from '../lib/themes/green';

function loadTheme() {
	const envTheme = process.env.NEXT_PUBLIC_LAYOUT
	let siteTheme = {}
	switch (envTheme) {
		case 'pink':
			siteTheme = pinkTheme
			break;
		case 'green':
			siteTheme = greenTheme
			break;
		default:
			break;
	}

	return siteTheme
}

function MyApp({ Component, pageProps }) {

	const siteTheme = loadTheme()

	const defaultTheme = {
		backgroundColor: 'grey',
		fontColor: 'white'
	}

	const theme = {
		...defaultTheme,
		...siteTheme
	}

	return (
		<ThemeProvider theme={theme}>
			<StyledPage>
				<Component {...pageProps} />
			</StyledPage>
		</ThemeProvider>
	)
}

export default MyApp


