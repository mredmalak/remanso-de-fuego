import React, { useState, useEffect } from 'react';
import { getAllGaleria } from '../../lib/fetch-galeria.js';

const ListGaleria = () => {
  const [galeria, setGaleria] = useState([]);

  const fetchAllGalleries = async () => {
    const galeriaData = await getAllGaleria();
    setGaleria(galeriaData);
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
            </article>
          );
        })}
      </section>
      <section>
        <form action="http://localhost:4000/galeria" method="post">
          <ul>
            <li>
              <label htmlFor="img">img:</label>
              <input type="string" />
            </li>
            <li>
              <label htmlFor="oracion">oracion:</label>
              <input type="string" defaultValue={''} />
            </li>
          </ul>
        </form>
        ;
      </section>
    </main>
  );
};

export default ListGaleria;
