import mongoose from 'mongoose';

const paisSchema = new mongoose.Schema({
    name: {
        type: Object,
        required: [true, 'El nombre es requerido']
    },
    capital: {
        type: [String],
        validate: {
            validator: (arr) => arr.every(c => c.length >= 3 && c.length <= 90),
            message: 'Cada capital debe tener entre 3 y 90 caracteres'
        }
    },
    borders: {
        type: [String],
        validate: {
            validator: (arr) => arr.every(b => /^[A-Z]{3}$/.test(b)),
            message: 'Cada frontera debe tener exactamente 3 letras mayúsculas'
        }
    },
    area: {
        type: Number,
        min: [0, 'El área debe ser un número positivo']
    },
    population: {
        type: Number,
        min: [0, 'La población debe ser un entero positivo']
    },
    timezones: [String],
    region: { type: String },
    flags: { type: Object },
    languages: { type: Object },
    creador: { type: String }
}, { strict: false });

const Pais = mongoose.model('Pais', paisSchema, 'Grupo-10');
export default Pais;