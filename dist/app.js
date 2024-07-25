"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//route import
const notFoundRoute_1 = __importDefault(require("./app/middleware/notFoundRoute"));
const globalErrorHandler_1 = __importDefault(require("./app/error/globalErrorHandler"));
const product_routes_1 = require("./app/modules/product/product.routes");
const cart_routes_1 = __importDefault(require("./app/modules/cart/cart.routes"));
const checkout_routes_1 = require("./app/modules/checkout/checkout.routes");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Testing route
app.get('/', (req, res) => {
    res.send('Hello from server');
});
// Route
app.use('/api/products', product_routes_1.productRouters);
app.use('/api/carts', cart_routes_1.default);
app.use('/api/checkouts', checkout_routes_1.checkoutRoutes);
//Not found route handle
app.all('*', notFoundRoute_1.default);
//Global error handling
app.use(globalErrorHandler_1.default);
exports.default = app;
