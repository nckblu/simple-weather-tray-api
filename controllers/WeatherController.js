import ApiService from '../services/ApiService';
import WeatherService from '../services/WeatherService';

class WeatherController {
	static async index(ctx) {
		const { cityId } = ctx.params;

		if (!cityId) ctx.throw(400, 'No cityId provided');

		if (!WeatherService.isValidCityId(cityId)) {
			ctx.throw(400, 'Invalid cityId');
		}

		let response = null;
		try {
			response = await ApiService.getCurrentWeather(cityId);
		} catch (e) {
			ctx.throw(500, 'Error getting weather');
		}
		const data = WeatherService.getDataFromResponse(response);
		ctx.body = data;
	}
}

export default WeatherController;
