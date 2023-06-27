import { getCurrentDateTime } from "./util.js";

export const renderWidgetToday = (widget, data) => {
	console.log("data :", data);
	const { month, year, dayOfMonth, dayOfWeek, hours, minutes } =
		getCurrentDateTime();
	console.log("data.name :", data.name);

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
					<p class="widget__wind-speed">3.94 m/s</p>
					<p class="widget__wind-text">&#8599;</p>
				</div>
				<div class="widget__humidity">
					<p class="widget__humidity-title">Humidity</p>
					<p class="widget__humidity-value">27%</p>
					<p class="widget__humidity-text">Т.Р: -0.2 °C</p>
				</div>
				<div class="widget__pressure">
					<p class="widget__pressure-title">Pressure</p>
					<p class="widget__pressure-value">768.32</p>
					<p class="widget__pressure-text">mm</p>
				</div>
			</div>`
	);
};

export const renderWidgetForecasts = (widget) => {
	widget.insertAdjacentHTML(
		"beforeend",
		`<ul class="widget__forecast">
				<li class="widget__day-item">
					<p class="widget__day-text">tue</p>
					<img class="widget__day-img" src="./icon/02d.svg" alt="Weather" />
					<p class="widget__day-temp">18.4°/13.7°</p>
				</li>
				<li class="widget__day-item">
					<p class="widget__day-text">wed</p>
					<img class="widget__day-img" src="./icon/03d.svg" alt="Weather" />
					<p class="widget__day-temp">17.3°/11.3°</p>
				</li>
				<li class="widget__day-item">
					<p class="widget__day-text">thu</p>
					<img class="widget__day-img" src="./icon/04d.svg" alt="Weather" />
					<p class="widget__day-temp">16.5°/10.9°</p>
				</li>
				<li class="widget__day-item">
					<p class="widget__day-text">fri</p>
					<img class="widget__day-img" src="./icon/01d.svg" alt="Weather" />
					<p class="widget__day-temp">18.6°/12.5°</p>
				</li>
				<li class="widget__day-item">
					<p class="widget__day-text">sat</p>
					<img class="widget__day-img" src="./icon/03d.svg" alt="Weather" />
					<p class="widget__day-temp">17.3°/11.2°</p>
				</li>
			</ul>`
	);
};

export const showError = (widget, error) => {
	widget.textCoontent = error.toString();
	widget.classList.add("widget_error");
};
