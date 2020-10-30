import mongoose from 'mongoose';

const animoFraseSchema = new mongoose.Schema(
  {
    animo: String,
    frase: String,
  },
  {
    timestamps: true,
  },
);

const AnimoFrase = mongoose.model('AnimoFrase', animoFraseSchema);

export const getAllAnimoFrase = async () => {
  try {
    return await AnimoFrase.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getAnimoFraseResourceById = async (id) => {
  try {
    return await AnimoFrase.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createAnimoFraseResource = async (data) => {
  try {
    return await AnimoFrase.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAnimoFraseResource = async (id, data) => {
  try {
    return await AnimoFrase.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAnimoFraseResource = async (id) => {
  try {
    return await AnimoFrase.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default AnimoFrase;
