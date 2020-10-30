import express from 'express';
import { ListGaleria } from '../controllers/galeria.js';

const galeriaRouter = express.Router();

galeriaRouter.get('/galeria', ListGaleria);

export default galeriaRouter;
