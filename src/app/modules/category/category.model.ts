import { Schema, model } from 'mongoose';
import { ICategory, ICategoryModel } from './category.interface';

const categorySchema = new Schema<ICategory, ICategoryModel>(
  {
    categoryName: {
      unique: true,
      required: true,
      type: String,
    },
    categoryImage: {
      required: true,
      type: String,
    },

    // products: [
    //   {
    //     type: Types.ObjectId,
    //     ref: 'Product',
    //     required: true,
    //   },
    // ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const CategoryModel = model<ICategory, ICategoryModel>(
  'Category',
  categorySchema
);
