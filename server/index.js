import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';

// middlewares
import loggerMiddleware from './middleware/logger-middleware.js';
import jsonResponse from './middleware/json-response.js';

// Routes
import animoFraseRouter from './routes/animo-frase.js';

const HOST = 'localhost';
const PORT = 4000;

const server = express();
server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use(jsonResponse);

// Server routes
server.use(animoFraseRouter);

server.listen(PORT, () => logger.info(`Listening port ${PORT}`));
