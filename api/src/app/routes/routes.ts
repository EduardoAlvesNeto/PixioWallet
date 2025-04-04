import { Router } from "express";

import AccountRoutes from "./AccountRoutes";
import AuthRoutes from './AuthRoutes'

const router = Router()
router.use('/account', AccountRoutes);
router.use('/auth', AuthRoutes)

export default router;