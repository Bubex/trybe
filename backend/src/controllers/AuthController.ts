import { Request, Response } from 'express';

import randomstring from 'randomstring';

export default {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const validatedEmail = /\S+@\S+\.\S+/.test(email);
        const validatedPassword = /^([0-9]{6})$/.test(password);

        if(!validatedEmail || !validatedPassword) {
            return res.status(400).json({ message: "Campos inválidos" });
        }
        
        const token = randomstring.generate(16);

        return res.json({ token });
    }
};