import {
	getCurrentDateTime,
	getWindDirection,
	convertPressure,
	getWeatherForecastData,
} from "./util.js";

export const renderWidgetToday = (widget, data) => {
	const { month, year, dayOfMonth, dayOfWeek, hours, minutes } =
		getCurrentDateTime();

	widget.insertAdjacentHTML(
		"beforeend",
		`<div class="widget__today">
				<div class="widget__date-block">
					<p class="widget__date">${dayOfMonth} ${month} ${year}</p>
					<p class="widget__time">${hours}:${minutes}</p>
					<p class="widget__day">${dayOfWeek}</p>
				</div>
				<div class="widget__icon">
					<img class="widget__img" src="./icon/${
						data.weather[0].icon
					}.svg" alt="Weather" />
				</div>
				<div class="widget__wheather">
					<div class="widget__city">
						<p>${data.name}</p>
						<button
							class="widget__change-city"
							aria-label="Change the city"></button>
					</div>
					<p class="widget__temp-big">${Math.round(data.main.temp)}°C</p>
					<p class="widget__felt">feels like</p>
					<p class="widget__temp-small">${Math.round(data.main.feels_like)} °C</p>
				</div>
			</div>`
	);
};

export const renderWidgetOther = (widget, data) => {
	widget.insertAdjacentHTML(
		"beforeend",
		`<div class="widget__other">
				<div class="widget__wind">
					<p class="widget__wind-title">Wind</p>
					<p class="widget__wind-speed">${Math.round(data.wind.speed)} m/s</p>
					<p class="widget__wind-text">${getWindDirection(data.wind.deg)}</p>
				</div>
				<div class="widget__humidity">
					<p class="widget__humidity-title">Humidity</p>
					<p class="widget__humidity-value">${data.main.humidity}%</p>
				</div>
				<div class="widget__pressure">
					<p class="widget__pressure-title">Pressure</p>
					<p class="widget__pressure-value">${convertPressure(data.main.pressure)}</p>
					<p class="widget__pressure-text">mm</p>
				</div>
			</div>`
	);
};

//${getWindDirection(data.wind.deg)}

export const renderWidgetForecasts = (widget, data) => {
	const widgetForecast = document.createElement("ul");
	widgetForecast.className = "widget__forecast";
	widget.append(widgetForecast);

	const forecastData = getWeatherForecastData(data); //!!!!

	const items = forecastData.map((item) => {
		const widgetDayItem = document.createElement("li");
		widgetDayItem.className = "widget__day-item";
		widgetDayItem.insertAdjacentHTML(
			"beforeend",
			`<p class="widget__day-text">${item.dayOfWeek}</p>
      <img class="widget__day-img" src="./icon/${item.weatherIcon}.svg" alt="Weather" />
      <p class="widget__day-temp">${Math.round(item.minTemp) }°/${Math.round(item.maxTemp)}°</p>`
		);
		return widgetDayItem;
	});

	widgetForecast.append(...items);
};

export const showError = (widget, error) => {
	widget.textCoontent = error.toString();
	widget.classList.add("widget_error");
};
