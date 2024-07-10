import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { cartServices } from './cart.services';

const createCartProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await cartServices.createCartProductBD(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Product add to cart successfully',
    data,
  });
});

const getAllCartProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await cartServices.getAllCartProductBD();
  res.status(200).json({
    status: 'success',
    message: 'Cart product fetched successfully',
    data,
  });
});
const updateCartProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await cartServices.updateCartProductBD(
    req.params.id,
    req.body.quantity,
  );
  res.status(200).json({
    status: 'success',
    message: 'Cart product updated successfully',
    data,
  });
});
const deleteCartProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await cartServices.deleteCartProductBD(req.params.id);
  res.status(200).json({
    status: 'success',
    message: 'Cart product deleted successfully',
    data,
  });
});

export const cartController = {
  createCartProduct,
  getAllCartProduct,
  updateCartProduct,
  deleteCartProduct,
};
