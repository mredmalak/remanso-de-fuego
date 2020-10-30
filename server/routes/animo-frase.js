import express from 'express';
import { listAllAnimoFrase } from '../controllers/animo-frases.js';

const animoFraseRouter = express.Router();

animoFraseRouter.get('/animo-frase', listAllAnimoFrase);

export default animoFraseRouter;
