import mongoose from 'mongoose';

const paisSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    capital: { type: String },
    poblacion: { type: Number },
    region: { type: String },
    bandera: { type: String }
});

const Pais = mongoose.model('Pais', paisSchema, 'Grupo-10');
export default Pais;