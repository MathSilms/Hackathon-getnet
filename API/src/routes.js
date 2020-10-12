import { Router } from 'express';

// Controllers
import UserController from './controllers/UserController';
import SessionController from './controllers/SesssionController';

//middlewares

import AuthMiddleware from './middlewares/auth'
const routes = new Router();

routes.post('/register', UserController.store);
routes.put('/users',AuthMiddleware, UserController.update);
routes.post('/login',SessionController.store);
routes.get('/show',UserController.show);

export default routes;
