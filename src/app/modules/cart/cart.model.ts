import mongoose from 'mongoose';
import { ProductModel } from '../product/product.model';
import { CartProductType } from './cart.interface';

// Define the Cart schema
const CartSchema = new mongoose.Schema<CartProductType>({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ProductModel,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity must be positive'],
  },
});

// Create the Cart model
const CartModel = mongoose.model<CartProductType>('Cart', CartSchema);

export default CartModel;
