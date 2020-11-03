import React, { useEffect, useState } from 'react';
import {
  getAllAnimoFrase,
  createAnimoFrase,
  deleteAnimoFrase,
} from '../../lib/fetch-animo-frase.js';
import { useHistory } from 'react-router-dom';

const ListAnimoFrase = () => {
  const [animoFrase, setAnimoFrase] = useState([]);

  const history = useHistory();

  const [newAnimoFrase, setnewAnimoFrase] = useState({
    animo: '',
    frase: '',
  });

  const fetchAllAnimoFrase = async () => {
    const animoFraseData = await getAllAnimoFrase();
    setAnimoFrase(animoFraseData);
  };

  const handleonChange = (event) => {
    const {
      currentTarget: { name, value },
    } = event;
    setnewAnimoFrase({ ...newAnimoFrase, [name]: value });
    console.log(newAnimoFrase);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await createAnimoFrase(newAnimoFrase);
    history.go(0);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const {
      currentTarget: { id },
    } = event;
    await deleteAnimoFrase(id);
    history.go(0);
  };
  useEffect(() => {
    fetchAllAnimoFrase();
  }, []);

  return (
    <main>
      <h1>¿Cual es tu estado de animo?</h1>

      <section>
        {animoFrase.map((animoFraseItem) => {
          return (
            <article key={animoFraseItem._id}>
              <h2>{animoFraseItem.animo}</h2>
              <div>
                <h3>{animoFraseItem.frase}</h3>
              </div>
              <button onClick={handleDelete} id={animoFraseItem._id}>
                borrar entrada
              </button>
            </article>
          );
        })}
      </section>
      <section>
        <form onSubmit={handleOnSubmit}>
          <ul>
            <li>
              <label htmlFor="animo">animo:</label>
              <input
                type="string"
                id="animo"
                name="animo"
                onChange={handleonChange}
              />
            </li>
            <li>
              <label htmlFor="frase">frase:</label>
              <input
                type="string"
                id="frase"
                name="frase"
                onChange={handleonChange}
              />
            </li>
          </ul>
          <button type="submit">crear nueva entrada </button>
        </form>
        ;
      </section>
    </main>
  );
};
export default ListAnimoFrase;
