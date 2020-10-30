import { getAllGaleria } from '../models/galeria.js';

export const ListGaleria = async (request, response) => {
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
