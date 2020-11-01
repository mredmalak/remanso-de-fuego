export const getAllAnimoFrase = async () => {
  const response = await fetch('http://localhost:4000/animo-frase');
  return await response.json();
};

export const createAnimoFrase = async ({ animo, frase }) => {
  const response = await fetch('http://localhost:4000/animo-frase', {
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
