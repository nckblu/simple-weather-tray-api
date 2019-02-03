import cities from '../cities';

export class WeatherService {
	static getDataFromResponse({ data }) {
		const { id, weather, name, main: { temp } } = data;
		return {
			id,
			weather: { ...weather[0], temp },
			name,
		};
	}

	static isValidCityId(cityId) {
		return !!cities.find(city => city.id == cityId);
	}
}

export default WeatherService;
