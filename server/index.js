import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// middlewares
import loggerMiddleware from './middleware/logger-middleware.js';
import jsonResponse from './middleware/json-response.js';

// Router
import animoFraseRouter from './routes/animo-frase.js';
import galeriaRouter from './routes/galeria.js';

const HOST =process.env.HOST || 'localhost';
const PORT =process.env.PORT || 4000;

export const databaseURI =process.env.DATABASE_URL || 'mongodb://localhost/remanso-de-fuego';


mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use(jsonResponse);

// Server routes
server.use(animoFraseRouter);
server.use(galeriaRouter);

server.listen(PORT, () => logger.info(`Listening port ${PORT}`));
