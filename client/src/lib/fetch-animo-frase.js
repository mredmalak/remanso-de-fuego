export const getAllAnimoFrase = async () => {
  const response = await fetch('http://localhost:4000/animo-frase');
  return await response.json();
};

export const createAnimoFrase = async (newAnimoFrase) => {
  const response = await fetch('http://localhost:4000/animo-frase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnimoFrase),
  });

  return await response.json();
};

export const deleteAnimoFrase = async (id) => {
  await fetch(`http://localhost:4000/animo-frase/${id}`, {
    method: 'DELETE',
  });
};
