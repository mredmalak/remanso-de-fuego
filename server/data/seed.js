import { databaseURI } from '../index.js';
import mongoose from 'mongoose';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Animo frase model
import AnimoFrase from '../models/animo-frases.js';
import animoFrases from './animo-frase.js';

Promise.all(
  animoFrases.map(async (animoFrase) => {
    const animoFraseResource = await AnimoFrase.create({ ...animoFrase });
    console.log(`The resource ${animoFraseResource} has been created`);
  }),
);
