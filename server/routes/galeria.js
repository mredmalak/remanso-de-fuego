import express from 'express';
import { getAllGaleria } from '../controllers/galeria.js';

const galeriaRouter = express.Router();

galeriaRouter.get('/galeria', getAllGaleria);

export default galeriaRouter;
