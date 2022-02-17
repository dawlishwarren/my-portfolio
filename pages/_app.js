import "../styles/globals.css";
import { setDataToLocalStorage } from "../utils/localStorage";
import * as uiThemes from "../styles/themes.json";
import ThemeState from "../context/themeContext/ThemeState";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	setDataToLocalStorage("all-themes", uiThemes.default);
	return (
		<SessionProvider session={session}>
			<ThemeState>
				<Component {...pageProps} />
			</ThemeState>
		</SessionProvider>
	);
}

export default MyApp;
