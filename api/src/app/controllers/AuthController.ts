import type { NextFunction, Request, Response } from "express";

import type SignInUseCase from "../usecases/auth/SignInUseCase";
import { BadRequestException } from "../utils/Exceptions";

class AuthController {
    constructor(private signInUseCase: SignInUseCase) { }

    async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password }: Record<string, string> = req.body;

            if (!email || !password) throw new BadRequestException('Campos vazios.');

            const token = await this.signInUseCase.execute(email, password)

            res.json({ token: token })
        } catch (err) {
            next(err)
        }
    }
}

export default AuthController;