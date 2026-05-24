import { validationResult } from 'express-validator';

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errores = errors.array();
        const datos = req.body;

        // Si es edición
        if (req.params.id) {
            return res.render('editPais', { 
                pais: { 
                    _id: req.params.id,
                    name: { official: datos.nombreOficial },
                    capital: [datos.capital],
                    borders: datos.borders ? datos.borders.split(',').map(b => b.trim()) : [],
                    area: datos.area,
                    population: datos.population,
                    timezones: [datos.timezones]
                }, 
                errores 
            });
        }

        // Si es creación
        return res.render('addPais', { errores, datos });
    }
    next();
};