"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const Product = new mongoose_1.Schema({
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
const ProductSchema = new mongoose_1.Schema({
    cartId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    product: { type: Product, required: true },
    quantity: { type: Number, required: true },
});
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});
const CheckoutProductSchema = new mongoose_1.Schema({
    products: { type: [ProductSchema], required: true },
    user: { type: UserSchema, required: true },
}, { timestamps: true });
// Create and export the model
const CheckoutProduct = mongoose_1.default.model('CheckoutProduct', CheckoutProductSchema);
exports.default = CheckoutProduct;
