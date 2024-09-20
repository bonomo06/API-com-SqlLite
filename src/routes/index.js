import { Router } from "express";
import produtoRouter from "./produto.route.js";
import imagemRouter from "./imagem.route.js";

const router = Router();

router.use('/produtos', produtoRouter);
router.use('/imagens', imagemRouter);

export default router;