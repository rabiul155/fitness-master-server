"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const product_validate_1 = __importDefault(require("./product.validate"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router
    .route('/')
    .get(product_controllers_1.productControllers.getAllProducts)
    .post((0, validateRequest_1.default)(product_validate_1.default), product_controllers_1.productControllers.createProduct);
router
    .route('/:id')
    .get(product_controllers_1.productControllers.getProduct)
    .patch((0, validateRequest_1.default)(product_validate_1.default.partial()), product_controllers_1.productControllers.updateProduct)
    .delete(product_controllers_1.productControllers.deleteProduct);
exports.productRouters = router;
