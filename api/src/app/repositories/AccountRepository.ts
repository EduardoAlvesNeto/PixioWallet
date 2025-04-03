import prisma from "@/app/database";
import { AccountType } from '@/app/schemas/AccountSchema'

export default class AccountRepository {
    async findByEmail(email: string) {
        return await prisma.account.findFirst({
            where: {
                email
            }
        })
    }

    async findByDocument(document: string) {
        return await prisma.account.findFirst({
            where: {
                document
            }
        })
    }

    async create({ id, name, email, password, document, role }: AccountType) {
        return await prisma.account.create({
            data: {
                id: id!,
                name,
                email,
                password,
                document,
                role
            }
        })
    }
}