import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICategory } from './category.interface';
import { CategoryModel } from './category.model';

const addCategory = async (
  categoryData: ICategory
): Promise<ICategory | null> => {
  const isExist = await CategoryModel.findOne({
    categoryName: categoryData.categoryName,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Category already exists with this name'
    );
  }

  return await CategoryModel.create({ ...categoryData });
};
const getAllCategory = async (): Promise<ICategory[] | null> => {
  return await CategoryModel.find().lean();
};
const getSingleCategory = async (id: string): Promise<ICategory | null> => {
  const isExist = await CategoryModel.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No user exists!');
  }
  return await CategoryModel.findById(id);
};

export const CategoryService = {
  addCategory,
  getSingleCategory,
  getAllCategory,
};
