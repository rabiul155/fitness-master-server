import mongoose from 'mongoose';
import { ProductType } from '../product/product.interface';

export type UserType = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type ProductsType = {
  cartId: mongoose.Types.ObjectId;
  product: ProductType;
  quantity: number;
};
export type CheckoutProductType = {
  user: UserType;
  products: ProductsType[];
};
