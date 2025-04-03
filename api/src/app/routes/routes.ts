import { Router } from "express";

import AccountRoutes from "./AccountRoutes"

const router = Router()
router.use('/account', AccountRoutes)

export default router;