import crypto from 'node:crypto'
import bcrypt from 'bcrypt'

import AccountRepository from "@/app/repositories/AccountRepository";
import { AccountType } from "@/app/schemas/AccountSchema";
import { BadRequestException, Exception } from '@/app/utils/Exceptions';

export default class CreateAccountUsecase {
    constructor(private repo: AccountRepository) { }

    async execute(data: AccountType) {
        const documentAlreadyInUse = await this.repo.findByDocument(data.document);
        const emailAlreadyInUse = await this.repo.findByEmail(data.email);

        try {
            if (documentAlreadyInUse) throw new BadRequestException('Documento já está cadastrado.')
            if (emailAlreadyInUse) throw new BadRequestException('Email já está cadastrado.')

            const hashedPassword = await bcrypt.hash(data.password, 8);
            const generatedId = crypto.randomUUID();

            await this.repo.create({ id: generatedId, name: data.name, document: data.document, email: data.email, password: hashedPassword, role: data.role })

            return;
        } catch (err) {
            throw err
        }
    }
}
