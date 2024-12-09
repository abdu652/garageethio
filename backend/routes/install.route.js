import express from "express";
import installController from "../controllers/install.controller.js";
const router = express.Router();
router.get("/install", installController);
export default router;
