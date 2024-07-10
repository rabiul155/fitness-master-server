import { z } from 'zod';

const productValidationSchema = z.object({
  name: z.string({ required_error: 'Product name is required.' }),
  description: z.string({ required_error: 'Product description is required.' }),
  price: z
    .number({ required_error: 'Price is required' })
    .min(0, 'Product price must be a positive number.'),
  rating: z
    .number({ required_error: 'Product rating is required' })
    .min(0, 'Product rating must be a positive number')
    .max(5, 'Product rating must be less than 5.'),
  image: z.string({ required_error: 'Product must have a image' }),
  category: z.string({ required_error: 'Product category is required.' }),
  stock: z.number({ required_error: 'Product stock quantity is required.' }),
});

export default productValidationSchema;
