import mongoose from 'mongoose';

const galeriaSchema = new mongoose.Schema(
  {
    img: String,
    oracion: String,
  },
  {
    timestamps: true,
  },
);

const Galeria = mongoose.model('Galeria', galeriaSchema);

export const getAllGaleria = async () => {
  try {
    return await Galeria.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getGaleriaResourceById = async (id) => {
  try {
    return await Galeria.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createGaleriaResource = async (data) => {
  try {
    return await Galeria.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateGaleriaResource = async (id, data) => {
  try {
    return await Galeria.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteGaleriaResource = async (id) => {
  try {
    return await Galeria.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Galeria;
