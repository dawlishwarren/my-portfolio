import "../styles/globals.css";
import { setDataToLocalStorage } from "../utils/localStorage";
import * as uiThemes from "../styles/themes.json";
import ThemeState from "../context/themeContext/ThemeState";

function MyApp({ Component, pageProps }) {
	setDataToLocalStorage("all-themes", uiThemes.default);

	return (
		<ThemeState>
			<Component {...pageProps} />
		</ThemeState>
	);
}

export default MyApp;
