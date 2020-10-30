import express from 'express';
import { ListGaleria } from '../controllers/galeria.js';

const galeriaRouter = express.Router();

galeriaRouter.get('/galeria', ListGaleria);

// TODO:
// GET /galeria/:id
// POST /galeria
// UPDATE /galeria/:id
// DELETE /galeria/:id

export default galeriaRouter;
