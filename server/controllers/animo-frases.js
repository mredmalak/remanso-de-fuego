import {
  getAllAnimoFrase,
  getAnimoFraseResourceById,
  createAnimoFraseResource,
  updateAnimoFraseResource,
  deleteAnimoFraseResource,
} from '../models/animo-frase.js';

export const listAllAnimoFrase = async (request, response) => {
  try {
    const allAnimoFrases = await getAllAnimoFrase();
    return response.status(200).send(allAnimoFrases);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

// From the URL GET (animoFrase/:id
export const getAnimoFraseById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;
  // Called a function that is declared in the resource model
  const animoFraseResource = await getAnimoFraseResourceById(id);
  // If we have a(animoFrase resource
  if (animoFraseResource) {
    // we return resource and 200 OK status
    return response.status(200).send(animoFraseResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: animoFrase resource not found.',
    });
  }
};

// POST /animo-frase with JSON payload in the body
export const createAnimoFrase = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)
  const { body } = request;
  try {
    // Called a function that is declared in the resource model
    const newAnimoFraseResource = await createAnimoFraseResource(body);
    return response.status(201).send(newAnimoFraseResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /animo-frase/:id
export const updateAnimoFraseById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;
  try {
    // Called a function that is declared in the resource model
    const animoFraseResource = await updateAnimoFraseResource(id, body);
    return response.status(200).send(animoFraseResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /animo-frase/:id
export const deleteAnimoFraseById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;
  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteAnimoFraseResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
