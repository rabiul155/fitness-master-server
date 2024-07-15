import mongoose from 'mongoose';

export type ProductType = {
  _id?: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  rating: number;
  image?: string;
  category: string;
  stock: number;
  isDeleted: boolean;
};
