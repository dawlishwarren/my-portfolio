import {
	GET_DEFAULT_THEME,
	GET_THEME_STATE,
	LOAD_THEMES,
	SET_ACTIVE_THEME,
	SET_LOADING,
} from "./theme-actions";

const themeReducer = (state, action) => {
	switch (action.type) {
		case LOAD_THEMES:
			return {
				...state,
				themes: [...state.themes, action.payload],
				loading: false,
			};
		case SET_ACTIVE_THEME:
			return {
				...state,
				activeTheme: action.payload,
				loading: false,
			};
		case GET_DEFAULT_THEME:
			return {
				...state,
				defaultTheme: action.payload,
				loading: false,
			};
		case GET_THEME_STATE:
			return state;
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export default themeReducer;
