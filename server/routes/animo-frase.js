import express from 'express';
import {
  listAllAnimoFrase,
  getAnimoFraseById,
  createAnimoFrase,
  updateAnimoFraseById,
  deleteAnimoFraseById,
} from '../controllers/animo-frases.js';

const animoFraseRouter = express.Router();

animoFraseRouter.get('/animo-frase', listAllAnimoFrase);

// TODO:
// GET /animo-frase/:id
animoFraseRouter.get('/animo-frase/:id', getAnimoFraseById);
// POST /animo-frase
animoFraseRouter.post('/animo-frase', createAnimoFrase);
// UPDATE /animo-frase/:id
animoFraseRouter.put('/animo-frase/:id', updateAnimoFraseById);
// DELETE /animo-frase/:id
animoFraseRouter.delete('/animo-frase/:id', deleteAnimoFraseById);

export default animoFraseRouter;
