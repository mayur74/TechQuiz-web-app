import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { createResult , listResults } from '../controllers/resultController.js'

const resultRouter = express.Router();

// keep POST protected (optional)
resultRouter.post('/', authMiddleware , createResult);

// remove auth for GET (for demo)
resultRouter.get('/', listResults);

export default resultRouter;