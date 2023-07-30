/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type ICategory = {
  categoryName: string;
  categoryImage: string;
  // products?: IProduct[];
};

export type ICategoryModel = Model<ICategory, Record<string, unknown>>;
