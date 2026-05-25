import { body } from 'express-validator';

export const paisValidationRules = () => [
    body('nombreOficial')
        .trim()
        .notEmpty().withMessage('El nombre oficial es requerido')
        .isLength({ min: 3 }).withMessage('El nombre oficial debe tener al menos 3 caracteres')
        .isLength({ max: 90 }).withMessage('El nombre oficial no puede superar los 90 caracteres'),

    body('capital')
        .trim()
        .notEmpty().withMessage('La capital es requerida')
        .isLength({ min: 3 }).withMessage('La capital debe tener al menos 3 caracteres')
        .isLength({ max: 90 }).withMessage('La capital no puede superar los 90 caracteres'),

    body('borders')
        .optional()
        .custom((value) => {
            if (!value) return true;
            const codigos = value.split(',').map(b => b.trim());
            codigos.forEach(codigo => {
                if (!/^[A-Z]{3}$/.test(codigo)) {
                    throw new Error(`"${codigo}" no es válido, cada frontera debe tener 3 letras mayúsculas`);
                }
            });
            return true;
        }),

    body('area')
        .notEmpty().withMessage('El área es requerida')
        .isFloat({ min: 0 }).withMessage('El área debe ser un número positivo'),

    body('population')
        .notEmpty().withMessage('La población es requerida')
        .isInt({ min: 0 }).withMessage('La población debe ser un entero positivo'),

    body('timezones')
        .trim()
        .notEmpty().withMessage('La zona horaria es requerida'),

    body('gini')
    .optional()
    .isFloat({ min: 0, max: 100 }).withMessage('El índice Gini debe ser un número entre 0 y 100'),
];