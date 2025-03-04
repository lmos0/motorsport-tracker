import express, { Router, RequestHandler } from "express";
import { getDrivers, addDriver, getDriverById, deleteDriver, updateDriver } from "../controllers/driverController";

const router = express.Router()

router.get('/', getDrivers as RequestHandler)
router.get("/:id", getDriverById as RequestHandler); 
//router.post('/', addDriver)
//router.put("/:id", updateDriver as RequestHandler); 
//router.delete("/:id", deleteDriver as RequestHandler);

export default router;