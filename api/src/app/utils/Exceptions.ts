import type { Request, Response, NextFunction } from "express";

class Exception extends Error {
    code: number;
    constructor(message: string, code: number) {
        super(message)
        this.message = message ?? 'Server Error'
        this.code = code ?? 500
    }
}

class BadRequestException extends Exception {
    constructor(message: string) {
        super(message ?? 'Bad Request', 400)
    }
}

class UnauthorizedException extends Exception {
    constructor(message: string) {
        super(message ?? 'Unauthorized', 401);
    }
}

class NotFoundException extends Exception {
    constructor(message: string) {
        super(message ?? 'Not Found', 404);
    }
}

function exceptionHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof Exception) {
        res.status(err.code).json({
            error: {
                code: err.code,
                message: err.message
            }
        })

        return;
    }

    console.error(err);
    res.status(500).json({
        error: {
            code: 500,
            message: 'Internal Server Error'
        }
    });
}

export {
    Exception,
    NotFoundException,
    BadRequestException,
    UnauthorizedException,
    exceptionHandler
}