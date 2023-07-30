import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

const addProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...productData } = req.body;
    const result = await ProductService.addProduct(productData);

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product added successfully!',
      data: result,
    });
  }
);

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();

  sendResponse<IProduct[] | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully!',

    data: result,
  });
});
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully!',
    data: result,
  });
});
const getProductsByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductService.getProductsByCategory(id);

    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrieved successfully!',
      data: result,
    });
  }
);

export const ProductController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
};
