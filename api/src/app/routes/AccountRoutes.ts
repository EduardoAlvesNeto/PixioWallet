import { Router } from "express";

import AccountController from "../controllers/AccountController";

const router = Router();

router.post('/', AccountController.store)

export default router;