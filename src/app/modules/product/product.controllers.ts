import { RequestHandler } from 'express';

import catchAsync from '../../utils/catchAsync';
import { productServices } from './product.services';

const createProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await productServices.createProductsDB(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Product created successfully',
    data,
  });
});

const getAllProducts: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await productServices.getAllProductsDB(req.query);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data,
  });
});
const getProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await productServices.getProductsDB(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data,
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await productServices.updateProductsDB(req.params.id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product updated successfully',
    data,
  });
});

const deleteProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await productServices.deleteProductsDB(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Product deleted successfully',
    data,
  });
});

export const productControllers = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
