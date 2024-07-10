import mongoose from 'mongoose';

export type CartProductType = {
  product: mongoose.Types.ObjectId;
  quantity: number;
};
