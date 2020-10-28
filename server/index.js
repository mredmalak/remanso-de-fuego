import express from 'express';
import bodyParser from 'body-parser';
import routes from './config/routes';

const server = express();

server.use(bodyParser.json());
server.use(routes);

server.listen(4000, () => console.log('Listening to port 4000'));
