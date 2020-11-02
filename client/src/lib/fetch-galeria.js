export const getAllGaleria = async () => {
  const response = await fetch('http://localhost:4000/galeria');
  return await response.json();
};

export const createGaleria = async ({ animo, frase }) => {
  const response = await fetch('http://localhost:4000/galeria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      animo,
      frase,
    }),
  });

  return await response.json();
};
