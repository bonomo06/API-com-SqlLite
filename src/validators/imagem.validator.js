import { body, param } from 'express-validator';

export const imagemValidator = [
    body('titulo').isString().withMessage('Título é obrigatório'),
    body('url').isString().withMessage('URL é obrigatório'),
    body('produtoId').isNumeric ().withMessage('produtoId é obrigatória'),
];

export const imagemUpdateValidator = [
    param('id').isInt().withMessage('Id é obrigatório'),
    body('titulo').isString().withMessage('Título é obrigatório'),
    body('url').isString().withMessage('URL é obrigatório'),
    body('produtoId').isNumeric ().withMessage('produtoId é obrigatória'),
];

export const imagemIdValidator = [
    param('id').isInt().withMessage('Id é obrigatório'),
];