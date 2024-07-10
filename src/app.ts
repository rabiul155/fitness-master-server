import express, { Application, Request, Response } from 'express';
import cors from 'cors';

//route import
import notFoundRoute from './app/middleware/notFoundRoute';
import globalErrorHandler from './app/error/globalErrorHandler';
import { productRouters } from './app/modules/product/product.routes';
import cartProductRoutes from './app/modules/cart/cart.routes';

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

//Testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from server');
});

// Route

app.use('/api/products', productRouters);
app.use('/api/carts', cartProductRoutes);

//Not found route handle
app.all('*', notFoundRoute);

//Global error handling
app.use(globalErrorHandler);

export default app;
