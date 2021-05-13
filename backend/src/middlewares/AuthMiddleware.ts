import { Request, Response, NextFunction } from 'express';

export default {
    main: async function(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        const validatedToken = /^([a-zA-Z0-9]){16}$/.test(authHeader);

        if(!authHeader || !validatedToken) {
            return res.status(401).json({ error: 'Token inválido.' });
        }

        next();
    }
}