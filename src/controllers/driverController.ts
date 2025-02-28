import { Request, Response } from 'express';
import Driver from "../models/Driver";

export const getDrivers = async (req: Request, res:Response) => {

    try {
        const drivers = await Driver.find()
        res.json(drivers)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error message" });
    }

    
}



export const addDriver = async (req:Request, res:Response) => {

    try {
        const newDriver = new Driver(req.body)
        await newDriver.save()
        res.status(201).json(newDriver)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error message" });
    }
    
}

export const getDriverById = async (req:Request, res:Response) =>{
    try {
        const driver = await Driver.findById(req.params.id)
        if(!driver){
           return res.status(404).json({message:"Driver not found"})
        }
        res.status(200).json(driver)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error message" });
    }
}

export const updateDriver = async (req:Request, res:Response) => {
    try {
        const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!updatedDriver){
            return res.status(404).json({message: "Driver not found"})
        }
        res.status(201).json(updatedDriver)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error message" });
    }
}

export const deleteDriver = async (req:Request, res:Response) => {
    try {
        const deletedDriver = await Driver.findByIdAndDelete(req.params.id)
        if(!deletedDriver) {
            return res.status(404).json({ message: "Driver not found" });
        }
        res.status(200).json({ message: "Driver deleted successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error message" });
}

}