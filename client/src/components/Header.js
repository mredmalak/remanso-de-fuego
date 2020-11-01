import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>MERN deployment app</h1>
      <nav>
        <ul>
          <li>
            <Link to="">¿Cuál es tu estado de ánimo?</Link>
          </li>
          <li>
            <Link to="">Obras de arte</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default withRouter(Header);
