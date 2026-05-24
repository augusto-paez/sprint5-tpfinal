import Pais from '../models/Pais.mjs';
import IRepository from './IRepository.mjs';

class PaisRepository extends IRepository {
    async obtenerTodos() {
        return await Pais.find({});
    }

    async obtenerPorId(id) {
        return await Pais.findById(id);
    }

    async buscarPorNombre(nombre) {
        return await Pais.find({ nombre: new RegExp(nombre, 'i') });
    }

    async filtrarPorRegion(region) {
        return await Pais.find({ region: new RegExp(region, 'i') });
    }

    async crear(data) {
        const pais = new Pais(data);
        return await pais.save();
    }

    async borrarPorId(id) {
        return await Pais.findByIdAndDelete(id);
    }
}
export default new PaisRepository();