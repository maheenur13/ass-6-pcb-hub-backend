import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/', CategoryController.addCategory);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getSingleCategory);

export const CategoryRoutes = router;
