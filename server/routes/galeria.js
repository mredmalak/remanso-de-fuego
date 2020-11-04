import express from 'express';
import {
  listAllGaleria,
  getGaleriaById,
  createGaleria,
  updateGaleriaById,
  deleteGaleriaById,
} from '../controllers/galeria.js';

const galeriaRouter = express.Router();

galeriaRouter.get('/galeria', listAllGaleria);

// GET /galeria/:id
galeriaRouter.get('/galeria/:id', getGaleriaById);
// POST /galeria
galeriaRouter.post('/galeria', createGaleria);
// UPDATE /galeria/:id
galeriaRouter.put('/galeria/:id', updateGaleriaById);
// DELETE /galeria/:id
galeriaRouter.delete('/galeria/:id', deleteGaleriaById);

export default galeriaRouter;
