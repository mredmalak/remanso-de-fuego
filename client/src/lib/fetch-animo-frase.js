const { REACT_APP_SERVER_URL } = process.env;

export const getAllAnimoFrase = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/animo-frase`);
  return await response.json();
};

export const createAnimoFrase = async (newAnimoFrase) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/animo-frase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnimoFrase),
  });

  return await response.json();
};

export const deleteAnimoFrase = async (id) => {
  await fetch(`${REACT_APP_SERVER_URL}/animo-frase/${id}`, {
    method: 'DELETE',
  });
};
