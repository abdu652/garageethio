import {Router} from 'express';
import installRoute from './install.route.js';
import employeeRoute from './employee.route.js';
import loginRoute from './login.route.js';
const router = Router();
router.use(installRoute);
router.use(employeeRoute);
router.use(loginRoute);
export default router;