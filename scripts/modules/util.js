// const addZero = (n) => {
// 	if (n < 10) {
// 		n = `0${n}`;
//   }

//   return n;
// };

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

	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const date = new Date();
	const dayOfMonth = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const dayOfWeek = weekDays[date.getDay()];

	const hours = addZero(date.getHours());
	const minutes = addZero(date.getMinutes());

	// if (hours < 10) {
	// 	hours = `0${hours}`;
	// }

	// if (minutes < 10) {
	// 	minutes = `0${minutes}`;
	// }

	return { month, year, dayOfMonth, dayOfWeek, hours, minutes };
};
