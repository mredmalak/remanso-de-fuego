export const getAllGaleria = async () => {
  const response = await fetch('http://localhost:4000/galeria');
  return await response.json();
};

export const createGaleria = async (newGaleria) => {
  const response = await fetch('http://localhost:4000/galeria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGaleria),
  });
  return await response.json();
};

export const deleteGaleria = async (id) => {
  await fetch(`http://localhost:4000/galeria/${id}`, {
    method: 'DELETE',
  });
};
