import AccountController from "../controllers/AccountController";
import AccountRepository from "../repositories/AccountRepository";
import CreateAccountUsecase from "../usecases/Account/CreateAccountUsecase";

import AuthController from "../controllers/AuthController";
import SignInUseCase from "../usecases/auth/SignInUseCase";

const accountRepository = new AccountRepository()

const createAccountUseCase = new CreateAccountUsecase(accountRepository)
const signInUseCase = new SignInUseCase(accountRepository)

const accountController = new AccountController(createAccountUseCase)
const authController = new AuthController(signInUseCase)

export {
    accountController,
    authController
}