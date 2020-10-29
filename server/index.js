import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
//import routes from './config/routes';

const HOST = './localhost';
const PORT = 4000;



const server = express();
server.use(bodyParser.json());
//server.use(routes);
server.use(logger);

const noEndPointHandler = (request, response, next) => {
  response.statusCode = 404;
  response.send({
    message: 'Error: endpoint not found.',
  });
};



server.get('*', noEndPointHandler);

server.listen(PORT, () => console.log(`Listening port ${PORT}`));
