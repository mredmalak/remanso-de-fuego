import { databaseURI } from '../index.js';
import mongoose from 'mongoose';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Animo frase model
import AnimoFrase from '../models/animo-frase.js';
import animoFrases from './animo-frase.js';

Promise.all(
  animoFrases.map(async (animoFrase) => {
    const animoFraseResource = await AnimoFrase.create({ ...animoFrase });
    console.log(`The resource ${animoFraseResource} has been created`);
  }),
);

// Galeria model
import Galeria from '../models/galeria.js';
import galerias from './galeria.js';

Promise.all(
  galerias.map(async (galeria) => {
    const galeriaResource = await Galeria.create({ ...galeria });
    console.log(`The resource ${galeriaResource} has been created`);
  }),
);
