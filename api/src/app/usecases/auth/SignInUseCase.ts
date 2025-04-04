import { sign } from "jsonwebtoken";

import type AccountRepository from "@/app/repositories/AccountRepository";
import PasswordChecker from "@/app/utils/PassowordChecker";
import { BadRequestException, UnauthorizedException } from "@/app/utils/Exceptions";

class SignInUseCase {
    constructor(private repo: AccountRepository) { }

    async execute(email: string, password: string) {
        const account = await this.repo.findByEmail(email)
        if (!account) throw new BadRequestException('Email invalido.');

        const checkPassword = await PasswordChecker.check(password, account.password)

        if (!checkPassword) throw new UnauthorizedException('Senha incorreta.')

        const token = sign({
            id: account.id,
            name: account.name,
            role: account.role,
        }, process.env.JWT_SECRET as string, {
            expiresIn: '1h'
        });

        return token
    }
}

export default SignInUseCase;