"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controllers_1 = require("./cart.controllers");
const router = express_1.default.Router();
router
    .route('/')
    .post(cart_controllers_1.cartController.createCartProduct)
    .get(cart_controllers_1.cartController.getAllCartProduct);
router
    .route('/:id')
    .patch(cart_controllers_1.cartController.updateCartProduct)
    .delete(cart_controllers_1.cartController.deleteCartProduct);
const cartProductRoutes = router;
exports.default = cartProductRoutes;
