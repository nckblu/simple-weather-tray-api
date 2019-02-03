import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
axios.defaults.params = { appid: config.OPEN_WEATHER_API_KEY, units: 'metric' };

export class ApiService {
	static getCurrentWeather(id) {
		return axios.get('weather', {
			params: { id },
		});
	}
}

export default ApiService;
