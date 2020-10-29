// Copy/pasta from winston docs

import winston from 'winston';
const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint, json } = format;
//mon ./index.js
const logger = createLogger({
  format: combine(timestamp(), prettyPrint(), json()),
  transports: [new transports.Console()],
  exitOnError: false,
});

export default logger;