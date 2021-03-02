import { ThemeProvider } from 'styled-components';
import StyledPage from '../components/styles/StyledPage';
import pinkTheme from '../lib/themes/pink';
import greenTheme from '../lib/themes/green';
import { useState } from 'react';

import StyleEditor from '../components/editor/StyleEditor';

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

	const [theme, setTheme] = useState({
		...defaultTheme,
		...siteTheme
	})

	const handleThemeUpdate = (update) => setTheme({...theme, ...update})

	const editor = process.env.NEXT_PUBLIC_EDIT ? <StyleEditor cssProps={Object.keys(theme)} onUpdate={handleThemeUpdate} /> : ''


	return (
		<ThemeProvider theme={theme}>
			<StyledPage>
				<Component {...pageProps} />
				{editor}
				<input type="color" onChange={(e) => setTheme({...theme, ...{backgroundColor: e.target.value }})} />
			</StyledPage>
		</ThemeProvider>
	)
}

export default MyApp


