import {
  getAllGaleria,
  getGaleriaResourceById,
  createGaleriaResource,
  updateGaleriaResource,
  deleteGaleriaResource,
} from '../models/galeria.js';

export const listAllGaleria = async (request, response) => {
  try {
    const galerias = await getAllGaleria();
    return response.status(200).send(galerias);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message: `${message}.`,
    });
  }
};

// From the URL GET (galeria/:id
export const getGaleriaById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;
  // Called a function that is declared in the resource model
  const galeriaResource = await getGaleriaResourceById(id);
  // If we have a(galeria resource
  if (galeriaResource) {
    // we return resource and 200 OK status
    return response.status(200).send(galeriaResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: galeria resource not found.',
    });
  }
};

// POST /galeria with JSON payload in the body
export const createGaleria = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)
  const { body } = request;
  try {
    // Called a function that is declared in the resource model
    const newGaleriaResource = await createGaleriaResource(body);
    return response.status(201).send(newGaleriaResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /galeria/:id
export const updateGaleriaById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;
  try {
    // Called a function that is declared in the resource model
    const galeriaResource = await updateGaleriaResource(id, body);
    return response.status(200).send(galeriaResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /galeria/:id
export const deleteGaleriaById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;
  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteGaleriaResource(id);
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
