export const getAllGaleria = async () => {
  const response = await fetch('http://localhost:4000/galeria');
  return await response.json();
};

<<<<<<< HEAD
export const createGaleria = async ({ img, oracion }) => {
=======
export const createGaleria = async ({ animo, frase }) => {
>>>>>>> 02b7b9da2c867b861f1f70e0f9c9fe84b7ac1c59
  const response = await fetch('http://localhost:4000/galeria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
<<<<<<< HEAD
      img,
      oracion,
=======
      animo,
      frase,
>>>>>>> 02b7b9da2c867b861f1f70e0f9c9fe84b7ac1c59
    }),
  });

  return await response.json();
};
