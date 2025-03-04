import express, {Router, RequestHandler} from "express";
import{ getChampionships, getChampionshipById, addChampionship, updatedChampionship, deleteChampionship } from "../controllers/championshipController";

const router = express.Router()

router.get('/', getChampionships)
router.get('/:id', getChampionshipById as RequestHandler)
//router.post('/', addChampionship)
//router.put('/:id', updatedChampionship as RequestHandler)
//router.delete('/:id', deleteChampionship as RequestHandler)

export default router