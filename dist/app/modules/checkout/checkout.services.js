"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutServices = void 0;
const cart_model_1 = __importDefault(require("../cart/cart.model"));
const checkout_model_1 = __importDefault(require("./checkout.model"));
const product_model_1 = require("../product/product.model");
const getCheckoutDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const checkouts = yield checkout_model_1.default.find();
    return checkouts;
});
const createCheckout = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = data.products.map((product) => cart_model_1.default.findByIdAndDelete(product.cartId));
    yield Promise.all(carts);
    const products = data.products.map((product) => product_model_1.ProductModel.findByIdAndUpdate(product.product._id, { $inc: { stock: -product.quantity } }, { new: true }));
    const data2 = yield Promise.all(products);
    console.log(data2);
    const result = yield checkout_model_1.default.create(data);
    return result;
});
exports.checkoutServices = {
    createCheckout,
    getCheckoutDB,
};
