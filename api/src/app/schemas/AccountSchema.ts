import { z } from "zod";

export const AccountSchema = z.object({
    id: z.string()
        .min(1, 'id é obrigatorio.')
        .uuid('id invalido.')
        .optional(),
    name: z.string()
        .min(1, 'nome é obrigatorio.'),
    document: z.string()
        .min(1, 'Documento é obrigatorio.'),
    email: z.string()
        .min(1, 'email é obrigatorio.')
        .email('email invalido.'),
    password: z.string()
        .min(1, 'Senha é obrigatoria.'),
    role: z.enum(['CUSTOMER', 'MERCHANT'])
        .optional()
})

export type AccountType = z.infer<typeof AccountSchema>