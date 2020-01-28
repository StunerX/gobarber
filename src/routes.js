import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json('Go Barber'));

export default routes;
