import Koa from 'koa';
import Router from 'koa-router';
import WeatherController from './controllers/WeatherController';
import cors from 'kcors';
import kError from 'koa-json-error';

const app = new Koa();
const router = new Router();

function formatError(err) {
	return {
		status: err.status,
		message: err.message,
	};
}

router.get('/weather/:cityId', WeatherController.index);
router.get('/weather', WeatherController.index);

app.use(cors());
app.use(kError(formatError));
app.use(router.routes());
app.listen(process.env.PORT || 3000);
