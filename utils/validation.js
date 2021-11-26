export function arrayIsPopulated(state, array) {
	return state && array.length > 0;
}

export function isActiveTheme() {
	if (activeTheme !== undefined || null || "") {
		return activeTheme;
	}
}
