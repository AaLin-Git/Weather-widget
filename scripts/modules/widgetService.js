import {
	renderWidgetForecasts,
	renderWidgetOther,
	renderWidgetToday,
} from "./render.js";
import { fetchWeather } from "./APIservice.js";

export const startWidget = async () => {
	const widget = document.createElement("div");
	widget.classList.add("widget");

	const dataWeather = await fetchWeather("Odessa");

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError();
	}

	renderWidgetForecasts(widget);

	return widget;
};
