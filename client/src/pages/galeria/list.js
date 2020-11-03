import React, { useState, useEffect } from 'react';
import {
  getAllGaleria,
  createGaleria,
  deleteGaleria,
} from '../../lib/fetch-galeria.js';
import { useHistory } from 'react-router-dom';

const ListGaleria = () => {
  const [galeria, setGaleria] = useState([]);

  const history = useHistory();

  const [newGaleria, setnewGaleria] = useState({
    img: '',
    oracion: '',
  });

  const fetchAllGalleries = async () => {
    const galeriaData = await getAllGaleria();
    setGaleria(galeriaData);
  };

  const handleonChange = (event) => {
    const {
      currentTarget: { name, value },
    } = event;
    setnewGaleria({ ...newGaleria, [name]: value });
    console.log(newGaleria);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await createGaleria(newGaleria);
    history.go(0);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const {
      currentTarget: { id },
    } = event;
    await deleteGaleria(id);
    history.go(0);
  };
  useEffect(() => {
    fetchAllGalleries();
  }, []);

  return (
    <main>
      <h2>Galeria</h2>

      <section>
        {galeria.map((galeriaItem) => {
          return (
            <article key={galeriaItem._id}>
              <h3>{galeriaItem.oracion}</h3>
              <picture>
                <img src={galeriaItem.img} alt={galeriaItem.oracion} />
              </picture>
              <button onClick={handleDelete} id={galeriaItem._id}>
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
              <label htmlFor="img">img:</label>
              <input
                type="string"
                id="img"
                name="img"
                onChange={handleonChange}
              />
            </li>
            <li>
              <label htmlFor="oracion">oracion:</label>
              <input
                type="string"
                id="oracion"
                name="oracion"
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

export default ListGaleria;
