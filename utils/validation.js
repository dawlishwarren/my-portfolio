export function arrayIsPopulated(state, array) {
	return state && array.length > 0;
}

export function isActiveTheme(activeTheme) {
	if (activeTheme !== undefined || null || "") {
		return activeTheme;
	}
}
