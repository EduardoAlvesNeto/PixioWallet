import { Router } from "express";

import { authController } from "../utils/dependencies";

const router = Router();

router.post('/signin', authController.signIn.bind(authController))

export default router;