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
exports.checkoutController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const checkout_services_1 = require("./checkout.services");
const createCheckout = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield checkout_services_1.checkoutServices.createCheckout(req.body);
    res.status(201).json({
        status: 'success',
        message: 'Product added to checkout',
        data,
    });
}));
const getCheckout = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield checkout_services_1.checkoutServices.getCheckoutDB();
    res.status(200).json({
        status: 'success',
        message: 'Checkout product get successfully',
        data,
    });
}));
exports.checkoutController = {
    createCheckout,
    getCheckout,
};
