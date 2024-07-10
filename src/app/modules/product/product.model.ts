import mongoose, { Query } from 'mongoose';
import { ProductType } from './product.interface';
const productSchema = new mongoose.Schema<ProductType>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required.'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required.'],
      min: [0, 'Product price must be a positive number.'],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Product rating must be a positive number.'],
      max: [5, 'Product rating must be less than 5.'],
    },
    image: {
      type: String,
      required: [true, 'Product mush have an image'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock quantity is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

productSchema.pre(/^find/, async function (next) {
  if (this instanceof Query) {
    this.find({ isDeleted: { $ne: true } });
  }
  next();
});

export const ProductModel = mongoose.model<ProductType>(
  'Product',
  productSchema,
);
