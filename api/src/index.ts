import Express from 'express';
import prisma from './app/database';

prisma.$connect()
    .then(() => {
        const app = Express();

        app.listen(3001, () => {
            console.log('Server is running on http://localhost:3001')
        })
    })
    .catch(() => {
        console.log('Database error')
    })