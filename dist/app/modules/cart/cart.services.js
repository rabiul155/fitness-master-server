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
exports.cartServices = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const product_model_1 = require("../product/product.model");
const cart_model_1 = __importDefault(require("./cart.model"));
const createCartProductBD = (cartProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_model_1.default.findOne({ product: cartProduct.product });
    if (data) {
        data.quantity = data.quantity + 1;
        yield data.save();
    }
    else {
        const product = yield cart_model_1.default.create(cartProduct);
        return product;
    }
});
const getAllCartProductBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield cart_model_1.default.find().populate({ path: 'product' });
    return products;
});
const updateCartProductBD = (id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    if (quantity > 0) {
        const cart = yield cart_model_1.default.findById(id);
        if (cart) {
            const product = yield product_model_1.ProductModel.findById(cart === null || cart === void 0 ? void 0 : cart.product);
            if (product && quantity > (product === null || product === void 0 ? void 0 : product.stock)) {
                throw new AppError_1.default(400, 'Quantity cross the limit of the stock');
            }
            cart.quantity = quantity;
            yield (cart === null || cart === void 0 ? void 0 : cart.save());
            return cart;
        }
        else {
            throw new AppError_1.default(404, 'Cart not found');
        }
    }
    if (quantity === 0) {
        const product = yield cart_model_1.default.findByIdAndDelete(id);
        return product;
    }
    if (quantity < 0) {
        throw new AppError_1.default(400, 'Quantity must be positive');
    }
});
const deleteCartProductBD = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield cart_model_1.default.findByIdAndDelete(id);
    return null;
});
exports.cartServices = {
    createCartProductBD,
    getAllCartProductBD,
    updateCartProductBD,
    deleteCartProductBD,
};
