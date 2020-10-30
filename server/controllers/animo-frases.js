import { getAllAnimoFrase } from '../models/animo-frase.js';

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
