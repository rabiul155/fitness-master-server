import AppError from '../../error/AppError';
import { ProductModel } from '../product/product.model';
import { CartProductType } from './cart.interface';
import CartModel from './cart.model';

const createCartProductBD = async (cartProduct: CartProductType) => {
  const data = await CartModel.findOne({ product: cartProduct.product });
  if (data) {
    data.quantity = data.quantity + 1;
    await data.save();
  } else {
    const product = await CartModel.create(cartProduct);
    return product;
  }
};

const getAllCartProductBD = async () => {
  const products = await CartModel.find().populate({ path: 'product' });
  return products;
};

const updateCartProductBD = async (id: string, quantity: number) => {
  if (quantity > 0) {
    const cart = await CartModel.findById(id);

    if (cart) {
      const product = await ProductModel.findById(cart?.product);

      if (product && quantity > product?.stock) {
        throw new AppError(400, 'Quantity cross the limit of the stock');
      }

      cart.quantity = quantity;
      await cart?.save();
      return cart;
    } else {
      throw new AppError(404, 'Cart not found');
    }
  }

  if (quantity === 0) {
    const product = await CartModel.findByIdAndDelete(id);
    return product;
  }

  if (quantity < 0) {
    throw new AppError(400, 'Quantity must be positive');
  }
};

const deleteCartProductBD = async (id: string) => {
  await CartModel.findByIdAndDelete(id);
  return null;
};

export const cartServices = {
  createCartProductBD,
  getAllCartProductBD,
  updateCartProductBD,
  deleteCartProductBD,
};
