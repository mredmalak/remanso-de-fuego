export const getAllGaleria = async () => {
  const response = await fetch('http://localhost:4000/galeria');
  return await response.json();
};

export const createGaleria = async ({ img, oracion }) => {
  const response = await fetch('http://localhost:4000/galeria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img,
      oracion,
    }),
  });

  return await response.json();
};
