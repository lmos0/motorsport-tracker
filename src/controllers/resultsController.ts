import { Request, Response } from "express";
import Result from "../models/Result";
import Championship from "../models/Championship";
import mongoose from "mongoose";



export const getResultById = async (req: Request, res: Response) => {
    try {
        const result = await Result.findById(req.params.id).populate("driverId championshipId");
        if (!result) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error fetching result", error });
    }
};

export const getResults = async (req: Request, res: Response) => {
    try {
        const results = await Result.find().populate("driverId championshipId");
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching results", error });
    }
};


export const addResult = async (req: Request, res: Response) => {
    try {
        const { driverId, championshipId, year, finalPosition } = req.body;

        // Get championship to determine points system
        const championship = await Championship.findById(championshipId);
        if (!championship) {
            return res.status(404).json({ message: "Championship not found" });
        }

        // Calculate points based on championship system
        const pointsEarned = championship.superLicensePoints[finalPosition] || 0;

        const newResult = new Result({
            driverId,
            championshipId,
            year,
            finalPosition,
            pointsEarned, // Calculated dynamically
        });

        await newResult.save();
        res.status(201).json(newResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding result" });
    }
};

export const updateResult = async (req: Request, res: Response) => {
    try {
        const { finalPosition, championshipId } = req.body;

        // Find result
        const result = await Result.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Result not found" });
        }

        // Get updated championship data to recalculate points
        const championship = await Championship.findById(championshipId || result.championshipId);
        if (!championship) {
            return res.status(404).json({ message: "Championship not found" });
        }

        // Recalculate points
        result.finalPosition = finalPosition || result.finalPosition;
        result.pointsEarned = championship.superLicensePoints[result.finalPosition] || 0;

        await result.save();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating result",  });
    }
};

export const deleteResult = async (req: Request, res: Response) => {
    try {
        const deletedResult = await Result.findByIdAndDelete(req.params.id);
        if (!deletedResult) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.json({ message: "Result deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting result" });
    }
};

export const getDriverTotalPoints = async (req: Request, res: Response) => {
    try {
        const {driverId} = req.params;
        
        // Convert string ID to ObjectId
        const objectId = new mongoose.Types.ObjectId(driverId);
        
        const totalPoints = await Result.aggregate([
            { $match: { driverId: objectId } }, 
            { $group: { _id: "$driverId", totalPoints: { $sum: "$pointsEarned" } } }
        ]);
        
        // console.log("Driver ID:", driverId);
        // console.log("Total Points:", totalPoints);
        
        if (totalPoints.length === 0) {
            
            const anyResults = await Result.find({ driverId: objectId });
            console.log("Any results found:", anyResults.length);
            
            return res.status(404).json({ message: "No results found for this driver" });
        }
        
        let points = totalPoints[0].totalPoints;
        if(points > 40){
            points = 40;
        }
      
        res.status(200).json({ driverId, totalPoints: points });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error fetching total points" });
    }
}