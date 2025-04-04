import { Router } from "express";

import { accountController } from "../utils/dependencies";

const router = Router();

router.post('/', accountController.store.bind(accountController))

export default router;