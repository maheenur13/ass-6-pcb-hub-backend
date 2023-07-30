import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICategory } from './category.interface';
import { CategoryService } from './category.service';

const addCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const result = await CategoryService.addCategory(categoryData);
  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category added successfully!',
    data: result,
  });
});
const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategory();
  sendResponse<ICategory[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All categories retrieved successfully!',
    data: result,
  });
});
const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getSingleCategory(id);

  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category retrieved successfully!',
    data: result,
  });
});

export const CategoryController = {
  addCategory,
  getAllCategory,
  getSingleCategory,
};
