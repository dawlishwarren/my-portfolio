import React, { useReducer } from "react";
import {
	GET_DEFAULT_THEME,
	GET_THEME_STATE,
	LOAD_THEMES,
	SET_ACTIVE_THEME,
	SET_LOADING,
} from "./theme-actions";
import ThemeContext from "./theme-context";
import themeReducer from "./theme-reducer";

const ThemeState = (props) => {
	const initialState = {
		themes: [],
		activeTheme: "",
		defaultTheme: "",
		loading: true,
	};
	const [state, dispatch] = useReducer(themeReducer, initialState);

	// Load all available themes
	const loadThemes = (APIthemes) => {
		dispatch({ type: LOAD_THEMES, payload: APIthemes });
	};

	const getThemes = () => {
		dispatch({ type: GET_THEME_STATE });
	};

	// Set Active Theme
	const setActiveTheme = (id) => {
		dispatch({ type: SET_ACTIVE_THEME, payload: id });
	};

	// Initialise default theme
	const getDefaultTheme = (theme) => {
		dispatch({ type: GET_DEFAULT_THEME, payload: theme });
	};

	// Set loading
	const setLoading = (value) => {
		dispatch({ type: SET_LOADING, payload: value });
	};
	return (
		<ThemeContext.Provider
			value={{
				state: state,
				themes: state.themes,
				activeTheme: state.activeTheme,
				defaultTheme: state.defaultTheme,
				loading: state.loading,
				setLoading,
				getThemes,
				loadThemes,
				setActiveTheme,
				getDefaultTheme,
			}}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeState;
