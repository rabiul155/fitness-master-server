import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { checkoutServices } from './checkout.services';

const createCheckout: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await checkoutServices.createCheckout(req.body);

  res.status(201).json({
    status: 'success',
    message: 'Product added to checkout',
    data,
  });
});

const getCheckout: RequestHandler = catchAsync(async (req, res, next) => {
  const data = await checkoutServices.getCheckoutDB();
  res.status(200).json({
    status: 'success',
    message: 'Checkout product get successfully',
    data,
  });
});

export const checkoutController = {
  createCheckout,
  getCheckout,
};
