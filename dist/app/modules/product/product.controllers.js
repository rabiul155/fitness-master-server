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
exports.productControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const product_services_1 = require("./product.services");
const createProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_services_1.productServices.createProductsDB(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: 'Product created successfully',
        data,
    });
}));
const getAllProducts = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_services_1.productServices.getAllProductsDB(req.query);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product retrieved successfully',
        data,
    });
}));
const getProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_services_1.productServices.getProductsDB(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product retrieved successfully',
        data,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_services_1.productServices.updateProductsDB(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product updated successfully',
        data,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield product_services_1.productServices.deleteProductsDB(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product deleted successfully',
        data,
    });
}));
exports.productControllers = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
