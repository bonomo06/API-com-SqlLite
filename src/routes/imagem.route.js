import { Router } from "express";
import ImagemController from "../controllers/imagem.controller.js";
import { imagemValidator, imagemUpdateValidator, imagemIdValidator } from "../validators/imagem.validator.js";

const router = Router();

router.get('/', ImagemController.index);
router.post('/', imagemValidator, ImagemController.create);
// router.get('/:id',  imagemIdValidator, ImagemController.show);
// router.put('/:id', imagemUpdateValidator, ImagemController.update);
// router.delete('/:id', imagemIdValidator, ImagemController.delete);

export default router;