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
exports.productServices = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const product_model_1 = require("./product.model");
const queryBuilders_1 = require("../../utils/queryBuilders");
const createProductsDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(data);
    return result;
});
const getAllProductsDB = (queryStr) => __awaiter(void 0, void 0, void 0, function* () {
    const queryBuilders = new queryBuilders_1.QueryBuilders(product_model_1.ProductModel.find(), queryStr)
        .filter()
        .search(['name', 'description'])
        .short()
        .select();
    const results = yield queryBuilders.Query;
    return results;
});
const getProductsDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById(id);
    if (!result) {
        throw new AppError_1.default(404, 'Product not found');
    }
    return result;
});
const updateProductsDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(404, 'Product not found');
    }
    return result;
});
const deleteProductsDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!result) {
        throw new AppError_1.default(404, 'Product not found');
    }
    return result;
});
exports.productServices = {
    createProductsDB,
    getAllProductsDB,
    getProductsDB,
    updateProductsDB,
    deleteProductsDB,
};
