import express from 'express';
import { checkoutController } from './checkout.controllers';
const router = express.Router();

router.post('/', checkoutController.createCheckout);
router.get('/', checkoutController.getCheckout);

export const checkoutRoutes = router;
