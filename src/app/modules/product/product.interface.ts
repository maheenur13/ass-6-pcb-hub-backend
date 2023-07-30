import { Model, Types } from 'mongoose';
import { ICategory } from '../category/category.interface';

export type IProduct = {
  productName: string;
  image: string;
  category: Types.ObjectId | ICategory;
  price: number;
  status: 'in stock' | 'out of stock';
  rating: number;
  description: string;
  keyFeatures: string[];
  avgRating: number;
  reviews: string[];
};

export type IProductModel = Model<IProduct, Record<string, unknown>>;
