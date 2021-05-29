import { Router } from 'express';

const authMiddleware = require('./middlewares/auth');

import { ProductController } from './controllers/ProductController';
import { UserController } from './controllers/UserController';
import { CategoriesController } from './controllers/CategoriesController';
import { OrderController } from './controllers/OrdersController';

const router = Router();

const userControler = new UserController();
const productControler = new ProductController();
const categoryController = new CategoriesController();
const orderController = new OrderController();

router.get('/users', authMiddleware, userControler.findAll);
router.get('/users/:id', authMiddleware, userControler.findOne);
router.put('/users/:id', authMiddleware, userControler.update);
router.delete('/users/:id', authMiddleware, userControler.delete);

router.post('/login', userControler.login);
router.post('/users/:profile_id', userControler.create);

router.get('/products', authMiddleware, productControler.index);
router.post('/products', authMiddleware,  productControler.create);
router.put('/products/:id', authMiddleware, productControler.update);
router.delete('/products/:id', authMiddleware, productControler.delete);

router.get('/categories', authMiddleware, categoryController.index);
router.post('/categories', authMiddleware, categoryController.create);
router.put('/categories/:id', authMiddleware, categoryController.update);
router.delete('/categories/:id', authMiddleware, categoryController.delete);

router.get('/orders', authMiddleware, orderController.index);
router.get('/orders/:user_id', authMiddleware, orderController.findUserOrders);
router.post('/orders/:user_id/:product_id', authMiddleware, orderController.create);
router.put('/orders/:order_id/:status_id', authMiddleware, orderController.changeStatus);


export { router };