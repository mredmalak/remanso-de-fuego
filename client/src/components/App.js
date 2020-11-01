import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// Components
import Footer from './Footer.js';
import Header from './Header.js';
// pages
import Home from '../pages/animo-frase/Home.js';
import ListAnimoFrase from '../pages/animo-frase/list.js';
//import NewMusic from '../pages/music/new.js';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/music/new" component={NewMusic} /> */}
          <Route path="/animo-frase" component={ListAnimoFrase} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
