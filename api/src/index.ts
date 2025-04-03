import express from 'express';

import prisma from '@/app/database';
import routes from '@/app/routes/routes'
import { exceptionHandler } from './app/utils/Exceptions';

async function startServer() {
    try {
        await prisma.$connect();

        const app = express();

        app.use(express.json());
        app.use('/v1', routes);
        app.use(exceptionHandler);

        app.listen(3001, () => {
            console.log('Server is running on http://localhost:3001');
        })
    } catch (err) {
        console.log('Database error');
    }
}

startServer()