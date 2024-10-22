import { Router } from "express";
import {
    store,
    show,
    index
} from "../controllers/product.js";

const router = Router();


router.post('/', store);
router.get('/:id', show);
router.get('/', index);


export default router;