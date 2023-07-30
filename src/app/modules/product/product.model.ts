import { Schema, model } from 'mongoose';
import { IProduct, IProductModel } from './product.interface';

const productSchema = new Schema<IProduct, IProductModel>(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      ref: 'Category',
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['out of stock', 'in stock'],
      required: true,
    },
    avgRating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: {
      type: [String],
      required: true,
    },
    reviews: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const ProductModel = model<IProduct, IProductModel>(
  'Product',
  productSchema
);
