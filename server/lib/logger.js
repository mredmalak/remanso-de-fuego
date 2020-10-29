// Copy/pasta from winston docs

//import winston from 'winston';
//const { createLogger, format, transports } = winston;
//const { combine, timestamp, prettyPrint, json } = format;
//mon ./index.js
//const logger = createLogger({
// format: combine(timestamp(), prettyPrint(), json()),
//transports: [new transports.Console()],
//exitOnError: false,
//});

const logger = (request, response, next) => {
  const { url, method, body } = request;
  const { body: responseBody, statusCode } = response;
  console.log(
    `Request from ${url} with method ${method} contining ${JSON.stringify(
      body,
    )}`,
  );
  console.log(`Response with status ${statusCode} contining ${responseBody}`);
  next();
};

export default logger;
