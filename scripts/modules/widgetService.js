import {
	renderWidgetForecasts,
	renderWidgetOther,
	renderWidgetToday,
} from "./render.js";
import { fetchForecast, fetchWeather } from "./APIservice.js";

export const startWidget = async () => {

	const city = 'Kyiv';
	const widget = document.createElement("div");
	widget.classList.add("widget");

	const dataWeather = await fetchWeather(city);

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError(dataWeather.error);
	}

	const dataForecast = await fetchForecast(city);

	if (dataForecast.success) {
		renderWidgetForecasts(widget, dataForecast.data);
	} else {
		showError(dataForecast.error);
	}

	return widget;
};

//other version with .then
// export const startWidget2 = () => {
// 	const widget = document.createElement("div");
// 	widget.classList.add("widget");

// 	fetchWeather("Odessa").then((dataWeather) => {
// 		if (dataWeather.success) {
// 			renderWidgetToday(widget, dataWeather.data);
// 			renderWidgetOther(widget, dataWeather.data);
// 		} else {
// 			showError();
// 		}
// 	});

// 	renderWidgetForecasts(widget);

// 	return widget;
// };
