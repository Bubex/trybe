import { Request, Response, Router } from 'express';

import AuthMiddleware from './middlewares/AuthMiddleware';
import AuthController from './controllers/AuthController';
import CurrencyController from './controllers/CurrencyController';

const routes = Router();

routes.post('/api/login', AuthController.login);

routes.use(AuthMiddleware.main);
routes.get('/api/crypto/btc', CurrencyController.index);
routes.post('/api/crypto/btc', CurrencyController.update);

routes.get('*', function(req: Request, res: Response){
    res.status(404).json({ "message": "Endpoint não encontrado" });
})

export default routes;