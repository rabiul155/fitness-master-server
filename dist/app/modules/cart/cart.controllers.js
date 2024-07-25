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
exports.cartController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const cart_services_1 = require("./cart.services");
const createCartProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_services_1.cartServices.createCartProductBD(req.body);
    res.status(201).json({
        status: 'success',
        message: 'Product add to cart successfully',
        data,
    });
}));
const getAllCartProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_services_1.cartServices.getAllCartProductBD();
    res.status(200).json({
        status: 'success',
        message: 'Cart product fetched successfully',
        data,
    });
}));
const updateCartProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_services_1.cartServices.updateCartProductBD(req.params.id, req.body.quantity);
    res.status(200).json({
        status: 'success',
        message: 'Cart product updated successfully',
        data,
    });
}));
const deleteCartProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cart_services_1.cartServices.deleteCartProductBD(req.params.id);
    res.status(200).json({
        status: 'success',
        message: 'Cart product deleted successfully',
        data,
    });
}));
exports.cartController = {
    createCartProduct,
    getAllCartProduct,
    updateCartProduct,
    deleteCartProduct,
};
