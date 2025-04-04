import type { Request, Response, NextFunction } from "express";

import { AccountSchema, AccountType } from "@/app/schemas/AccountSchema";
import CreateAccountUsecase from "@/app/usecases/Account/CreateAccountUsecase";
import { BadRequestException } from "../utils/Exceptions";

class AccountController {
    constructor(private createAccountUseCase: CreateAccountUsecase) { }

    async store(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { name, document, email, password }: AccountType = req.body;

        try {
            const checkBody = AccountSchema.safeParse({ name, document, email, password });

            if (!checkBody.success) {
                throw new BadRequestException(checkBody.error.errors[0].message)
            }

            await this.createAccountUseCase.execute({ name, document, email, password })

            res.sendStatus(201)
        } catch (err) {
            next(err)
        }
    }
}

export default AccountController;