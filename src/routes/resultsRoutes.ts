import express, {RequestHandler} from 'express'

import{ getResults, addResult, getResultById, deleteResult, updateResult, getDriverTotalPoints, getDriverResultsById } from '../controllers/resultsController'

const router = express.Router()

router.get('/', getResults)
router.get('/:id', getResultById as RequestHandler)
router.get("/:driverId/points", getDriverTotalPoints as RequestHandler);
router.get("/:driverId/results", getDriverResultsById as RequestHandler);
router.post('/', addResult as RequestHandler)
router.put('/:id', updateResult as RequestHandler)
router.delete('/:id', deleteResult as RequestHandler)

export default router