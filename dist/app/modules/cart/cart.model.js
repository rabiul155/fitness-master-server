"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("../product/product.model");
// Define the Cart schema
const CartSchema = new mongoose_1.default.Schema({
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: product_model_1.ProductModel,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity must be positive'],
    },
});
// Create the Cart model
const CartModel = mongoose_1.default.model('Cart', CartSchema);
exports.default = CartModel;
