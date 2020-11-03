import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>Remanso de fuego</h1>
      <nav>
        <ul>
          <li>
            <Link to="/animo-frase">¿Cuál es tu estado de ánimo?</Link>
          </li>
          <li>
            <Link to="/galeria">Obras de arte</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default withRouter(Header);
