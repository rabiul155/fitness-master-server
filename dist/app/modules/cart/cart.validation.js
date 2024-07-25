"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const cartValidationSchema = zod_1.z.object({
    product: zod_1.z.string({ required_error: 'Product id missing' }),
    quantity: zod_1.z.number().min(0, { message: 'Quantity must be positive' }),
});
exports.default = cartValidationSchema;
