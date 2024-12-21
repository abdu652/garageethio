import express from 'express';
import employeeController from '../controllers/employee.controller.js';
import middleware from '../middlewares/auth.middleware.js';
const {isAdmin, verifyToken} = middleware;
const router = express.Router();

router.post("/admin/add-employee",verifyToken, isAdmin, employeeController);
export default router;