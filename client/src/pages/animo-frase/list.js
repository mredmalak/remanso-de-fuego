import React, { useEffect, useState } from 'react';
import { getAllAnimoFrase } from '../../lib/fetch-animo-frase.js';

const ListAnimoFrase = () => {
  const [animoFraseData, setAnimoFraseData] = useState([]);

  const fetchAllAnimoFrase = async () => {
    const data = await getAllAnimoFrase();
    console.log({ data });
    setAnimoFraseData(data);
  };

  useEffect(() => {
    fetchAllAnimoFrase();
  }, []);

  return (
    <main>
      <h2>Lista completa de </h2>
      <ul>
        {animoFraseData.map((animoFraseItem, i) => {
          return (
            <li key={i}>
              <h3>{animoFraseItem.animo}</h3>
              <p>{animoFraseItem.frase}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ListAnimoFrase;
