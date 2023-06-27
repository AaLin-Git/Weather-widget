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

	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const date = new Date();
	const dayOfMonth = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const dayOfWeek = weekDays[date.getDay()];

	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (hours < 10) {
		hours = `0${hours}`;
	}

	return { month, year, dayOfMonth, dayOfWeek, hours, minutes };
};
