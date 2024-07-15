import { promise } from 'zod';
import CartModel from '../cart/cart.model';
import { CheckoutProductType } from './checkout.interface';
import CheckoutProduct from './checkout.model';
import { ProductModel } from '../product/product.model';

const getCheckoutDB = async () => {
  const checkouts = await CheckoutProduct.find();
  return checkouts;
};

const createCheckout = async (data: CheckoutProductType) => {
  const carts = data.products.map((product) =>
    CartModel.findByIdAndDelete(product.cartId),
  );
  await Promise.all(carts);

  const products = data.products.map((product) =>
    ProductModel.findByIdAndUpdate(
      product.product._id,
      { $inc: { stock: -product.quantity } },
      { new: true },
    ),
  );

  const data2 = await Promise.all(products);
  console.log(data2);

  const result = await CheckoutProduct.create(data);
  return result;
};

export const checkoutServices = {
  createCheckout,
  getCheckoutDB,
};
