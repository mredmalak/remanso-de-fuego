import express from 'express';
import { listAllAnimoFrase } from '../controllers/animo-frases.js';

const animoFraseRouter = express.Router();

animoFraseRouter.get('/animo-frase', listAllAnimoFrase);

// TODO:
// GET /animo-frase/:id
// POST /animo-frase
// UPDATE /animo-frase/:id
// DELETE /animo-frase/:id

export default animoFraseRouter;
