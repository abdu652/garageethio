import express from 'express';
import employeeController from '../controllers/employee.controller.js';
const router = express.Router();

router.post("/employee",employeeController);
export default router;