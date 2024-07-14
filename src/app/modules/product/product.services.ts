import mongoose from 'mongoose';
import AppError from '../../error/AppError';
import { ProductType } from './product.interface';
import { ProductModel } from './product.model';
import { QueryBuilders } from '../../utils/queryBuilders';

const createProductsDB = async (data: ProductType) => {
  const result = await ProductModel.create(data);
  return result;
};

const getAllProductsDB = async (queryStr: Record<string, unknown>) => {
  const queryBuilders = new QueryBuilders(ProductModel.find(), queryStr)
    .filter()
    .search(['name', 'description'])
    .short()
    .select();
  const results = await queryBuilders.Query;

  return results;
};

const getProductsDB = async (id: string | mongoose.Types.ObjectId) => {
  const result = await ProductModel.findById(id);
  if (!result) {
    throw new AppError(404, 'Product not found');
  }
  return result;
};

const updateProductsDB = async (id: string, data: Partial<ProductType>) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(404, 'Product not found');
  }
  return result;
};

const deleteProductsDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  if (!result) {
    throw new AppError(404, 'Product not found');
  }
  return result;
};

export const productServices = {
  createProductsDB,
  getAllProductsDB,
  getProductsDB,
  updateProductsDB,
  deleteProductsDB,
};
