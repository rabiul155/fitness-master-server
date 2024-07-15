import mongoose, { Schema } from 'mongoose';
import { CheckoutProductType } from './checkout.interface';

const Product = new Schema({
  _id: String,
  name: String,
  description: String,
  price: Number,
  rating: Number,
  image: String,
  category: String,
  stock: Number,
  isDeleted: Boolean,
});

const ProductSchema: Schema = new Schema({
  cartId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  product: { type: Product, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const CheckoutProductSchema: Schema = new Schema(
  {
    products: { type: [ProductSchema], required: true },
    user: { type: UserSchema, required: true },
  },
  { timestamps: true },
);

// Create and export the model
const CheckoutProduct = mongoose.model<CheckoutProductType>(
  'CheckoutProduct',
  CheckoutProductSchema,
);
export default CheckoutProduct;
