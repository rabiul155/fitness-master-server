import express from 'express';
import { cartController } from './cart.controllers';

const router = express.Router();

router
  .route('/')
  .post(cartController.createCartProduct)
  .get(cartController.getAllCartProduct);
router
  .route('/:id')
  .patch(cartController.updateCartProduct)
  .delete(cartController.deleteCartProduct);

const cartProductRoutes = router;
export default cartProductRoutes;
