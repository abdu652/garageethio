import express from 'express';
import installController from './install.route.js';
const router = express.Router();
router.use(installController);
export default router;