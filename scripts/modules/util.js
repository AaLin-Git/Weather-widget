// add 0 to hours and minutes, 2 version
// const addZero = (n) => {
// 	if (n < 10) {
// 		n = `0${n}`;
//   }

//   return n;
// };

//add 0 to hours and minutes, 3 version
const addZero = (n) => (n < 10 ? `0${n}` : n);

export const getCurrentDateTime = () => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const weekDays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const date = new Date();
	const dayOfMonth = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const dayOfWeek = weekDays[date.getDay()];

	const hours = addZero(date.getHours());
	const minutes = addZero(date.getMinutes());

	// add 0 to hours and minutes, 1 version
	// if (hours < 10) {
	// 	hours = `0${hours}`;
	// }

	// if (minutes < 10) {
	// 	minutes = `0${minutes}`;
	// }

	return { month, year, dayOfMonth, dayOfWeek, hours, minutes };
};

export const getWindDirection = (deg) => {
	const directions = [
		"&#8593;",
		"&#8598;",
		"&#8592;",
		"&#8601;",
		"&#8595;",
		"&#8600;",
		"&#8594;",
		"&#8599;",
	];

	const i = Math.round(deg / 45) % 8;

	return directions[i];
};

export const convertPressure = (pressure) => {
	const mmHg = pressure * 0.750062;
	return Math.round(mmHg);
};

export const getWeatherForecastData = (data) => {
	//console.log('data :', data);
	const forecast = data.list.filter((item) => {
		//console.log(data);
		return (
			new Date(item.dt_txt).getHours() === 12 &&
			new Date(item.dt_txt).getDate() > new Date().getDate()
		);
	});

	console.log(forecast);

	const forecastData = forecast.map((item) => {
		const date = new Date(item.dt_txt);
		const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const dayOfWeek = weekDaysShort[date.getDay()];
		const weatherIcon = item.weather[0].icon;

		let minTemp = Infinity;
		let maxTemp = -Infinity;

		for (let i = 0; i < data.list.length; i++) {
			const temp = data.list[i].main.temp;
			const tempDate = new Date(data.list[i].dt_txt);

			if (tempDate.getDate() === date.getDate() && temp < minTemp) {
				minTemp = temp;
			}

			if (tempDate.getDate() === date.getDate() && temp > maxTemp) {
				maxTemp = temp;
			}
		}

		return {
			dayOfWeek,
			weatherIcon,
			minTemp,
			maxTemp,
		};
	});
	return forecastData;
};
