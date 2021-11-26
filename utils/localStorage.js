export const setDataToLocalStorage = (key, value) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const getDataFromLocalStorage = (key) => {
	try {
		if (typeof window !== "undefined") {
			const value = localStorage.getItem(key);
			if (value && value !== "undefined") {
				return JSON.parse(value);
			}
		}
	} catch (e) {
		console.error(e);
	}
};

export const getAllThemesFromLocalStorage = (key) => {
	try {
		if (typeof window !== "undefined") {
			const value = localStorage.getItem(key);
			if (value && value !== "undefined") {
				return JSON.parse(value);
			}
		}
	} catch (e) {
		console.log(e);
	}
};
