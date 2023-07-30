import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.addProduct);

router.get('/:id', ProductController.getSingleProduct);
router.get('/category/:id', ProductController.getProductsByCategory);

export const ProductRoutes = router;
