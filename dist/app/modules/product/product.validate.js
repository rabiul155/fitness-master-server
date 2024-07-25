"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: 'Product name is required.' }),
    description: zod_1.z.string({ required_error: 'Product description is required.' }),
    price: zod_1.z
        .number({ required_error: 'Price is required' })
        .min(0, 'Product price must be a positive number.'),
    rating: zod_1.z
        .number({ required_error: 'Product rating is required' })
        .min(0, 'Product rating must be a positive number')
        .max(5, 'Product rating must be less than 5.'),
    image: zod_1.z.string({ required_error: 'Product must have a image' }),
    category: zod_1.z.string({ required_error: 'Product category is required.' }),
    stock: zod_1.z.number({ required_error: 'Product stock quantity is required.' }),
});
exports.default = productValidationSchema;
