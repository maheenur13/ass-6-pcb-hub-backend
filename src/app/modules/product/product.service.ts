import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const addProduct = async (productData: IProduct): Promise<IProduct | null> => {
  const isExist = await ProductModel.findOne({
    productName: productData.productName,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Product already exists with this title'
    );
  }

  return (await ProductModel.create({ ...productData })).populate('category');
};

const getAllProducts = async (): Promise<IProduct[] | null> => {
  return await ProductModel.aggregate([
    { $sample: { size: 6 } },
    {
      $lookup: {
        from: 'categories', // Name of the target collection (case-sensitive)
        localField: 'category', // Field in the "Product" collection
        foreignField: 'category', // Field in the "Category" collection to match with localField
        as: 'category', // The name of the new field that will contain the populated data
      },
    },
  ]);
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const isExist = await ProductModel.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product do not exist!');
  }
  return await ProductModel.findById(id).populate('category');
};
const getProductsByCategory = async (
  id: string
): Promise<IProduct[] | null> => {
  return await ProductModel.find({ category: id }).populate('category');
};

export const ProductService = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
};
