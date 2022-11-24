import axios from "axios"

const API_KEY = "c3b3cea7594ed45e59f098c4d834d49e"

const getFormattedWeatherData = async (city, units = "metric") => {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
	)

	const {
		weather,
		main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
		wind: { speed },
		sys: { country },
		name,
	} = data

	const { description, icon } = weather[0]

	return {
		description,
		iconURL: `https://openweathermap.org/img/wn/${icon}@2x.png`,
		temp,
		feels_like,
		temp_min,
		temp_max,
		pressure,
		humidity,
		speed,
		country,
		name,
	}
}

export { getFormattedWeatherData }
