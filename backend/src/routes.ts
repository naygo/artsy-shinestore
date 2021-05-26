import { Router } from 'express';
import multer from 'multer';
import storage from './config/multer';

const authMiddleware = require('./middlewares/auth');

import { ProductController } from './controllers/ProductController';
import { UserController } from './controllers/UserController';
import { CategoriesController } from './controllers/CategoriesController';

const router = Router();

const upload = multer(storage);

const userControler = new UserController();
const productControler = new ProductController();
const categoryController = new CategoriesController();

router.get('/users', authMiddleware, userControler.findAll);
router.get('/users/:id', authMiddleware, userControler.findOne);
router.put('/users/:id', authMiddleware, userControler.update);
router.delete('/users/:id', authMiddleware, userControler.delete);

router.post('/login', userControler.login);
router.post('/users/:profile_id', userControler.create);

router.get('/products', authMiddleware, productControler.index);
router.post('/products', authMiddleware, upload.single('img_link'), productControler.create);
router.put('/products/:id', authMiddleware, productControler.update);
router.delete('/products/:id', authMiddleware, productControler.delete);

router.get('/categories', authMiddleware, categoryController.index);
router.post('/categories', authMiddleware, categoryController.create);
router.put('/categories/:id', authMiddleware, categoryController.update);
router.delete('/categories/:id', authMiddleware, categoryController.delete);

export { router };