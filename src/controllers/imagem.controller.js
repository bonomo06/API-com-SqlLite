import { validationResult } from 'express-validator';
import Imagem from '../models/imagem.model.js';

export default class ImagemController{
    static async index(req, res) {
        const imagens = await Imagem.findMany();
        res.json(imagens);
    }
    static async create(req, res){
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.status(400).json({erros: erros.array()});
        }
        const imagem = await Imagem.create({
            data: req.body
        });
        res.json(imagem);
    }
}