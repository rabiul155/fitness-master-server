import express from 'express';
import validateRequest from '../../utils/validateRequest';
import productValidationSchema from './product.validate';
import { productControllers } from './product.controllers';

const router = express.Router();

router
  .route('/')
  .get(productControllers.getAllProducts)
  .post(
    validateRequest(productValidationSchema),
    productControllers.createProduct,
  );
router
  .route('/:id')
  .get(productControllers.getProduct)
  .patch(
    validateRequest(productValidationSchema.partial()),
    productControllers.updateProduct,
  )
  .delete(productControllers.deleteProduct);

export const productRouters = router;
