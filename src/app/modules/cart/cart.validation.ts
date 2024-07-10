import { z } from 'zod';

const cartValidationSchema = z.object({
  product: z.string({ required_error: 'Product id missing' }),
  quantity: z.number().min(0, { message: 'Quantity must be positive' }),
});

export default cartValidationSchema;
