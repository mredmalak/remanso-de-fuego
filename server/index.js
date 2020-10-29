import express from 'express';
import bodyParser from 'body-parser';
//import routes from './config/routes';

const HOST = './localhost';
const PORT = 4000;

const server = express();
server.use(bodyParser.json());
//server.use(routes);

const noEndPointHandler = (request, response, next) => {
  console.log('touching endpoint');
};

server.get('*', noEndPointHandler);

server.listen(PORT, () => console.log(`Listening port ${PORT}`));
