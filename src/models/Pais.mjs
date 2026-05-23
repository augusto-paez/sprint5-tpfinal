import mongoose from 'mongoose';

const paisSchema = new mongoose.Schema({
    name: { type: Object },
    capital: [String],
    borders: [String],
    area: { type: Number },
    population: { type: Number },
    timezones: [String],
    region: { type: String },
    flags: { type: Object },
    languages: { type: Object },
    creador: { type: String }
}, { strict: false });

const Pais = mongoose.model('Pais', paisSchema, 'Grupo-10');
export default Pais;