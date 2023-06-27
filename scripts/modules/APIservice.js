// 26310790c7af07b3a6f2f1bf2272d7f2

// https://api.openweathermap.org/data/2.5/

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "26310790c7af07b3a6f2f1bf2272d7f2";

export const fetchWeather = async (city) => {
	try {
		const response = await fetch(
			`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=en&units=metric`
		);

		if (!response.ok) {
			throw new Error("Ошибка запроса");
		}

		const data = await response.json();

		return { success: true, data };
	} catch (err) {
		return { success: false, err };
	}
};
