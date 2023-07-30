import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { ProductRoutes } from '../modules/product/product.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
