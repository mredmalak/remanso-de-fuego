const { REACT_APP_SERVER_URL } = process.env;

export const getAllGaleria = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/galeria`);
  return await response.json();
};

export const createGaleria = async (newGaleria) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/galeria`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGaleria),
  });
  return await response.json();
};

export const deleteGaleria = async (id) => {
  await fetch(`${REACT_APP_SERVER_URL}/galeria/${id}`, {
    method: 'DELETE',
  });
};
