import { Request, Response } from "express";
import Championship from "../models/Championship";



export const getChampionships = async (req:Request, res:Response) => {
    try {
        const championships = await Championship.find()
        res.status(200).json(championships)
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Error fetching championships" });
    }
}

export const getChampionshipById = async (req:Request, res:Response) => {
    try {
        const championship = await Championship.findById(req.params.id);
        if(!championship){
            return res.status(404).json({message: "Championship not found"})
        }
        res.status(200).json(championship)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching championship" });
    }
}

export const addChampionship = async (req:Request, res:Response) => {
    try {
        const newChampionship = new Championship(req.body)
        await newChampionship.save()
        res.status(201).json(newChampionship)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding championship" });
    }
}

export const updatedChampionship = async (req:Request, res:Response) => {
    try {
        const updatedChampionship = await Championship.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true}
        )
        if(!updatedChampionship){
            return res.status(404).json(updatedChampionship)
        }
        res.status(200).json(updatedChampionship);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error updating championship" });
        
    }
}

export const deleteChampionship = async (req:Request, res:Response) => {
    try {
        const deletedChampionship = await Championship.findByIdAndDelete(req.params.id)
        if(!deletedChampionship){
            return res.status(404).json({ message: "Championship not found" });
        }
        res.status(200).json(deletedChampionship)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting championship" });
    }
}