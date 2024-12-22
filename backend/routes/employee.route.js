import express from 'express';
import employeeController, {employeesList} from '../controllers/employee.controller.js';
import middleware from '../middlewares/auth.middleware.js';
const {isAdmin, verifyToken} = middleware;
const router = express.Router();

router.post("/admin/add-employee",verifyToken, isAdmin, employeeController);
router.get("/admin/employees",verifyToken, isAdmin, employeesList);
export default router;