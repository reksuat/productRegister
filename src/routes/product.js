import { Router } from "express";
import {
    store,
    show
} from "../controllers/product.js";

const router = Router();


router.post('/', store);
router.get('/:id', show);

export default router;