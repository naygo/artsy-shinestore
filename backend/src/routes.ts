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

router.get('/users', authMiddleware ,userControler.findAll);
router.get('/users/:id', userControler.findOne);
router.post('/users/:profile_id', authMiddleware, userControler.create);

router.post('/login', userControler.login);

router.get('/products', productControler.index);
router.post('/products', upload.single('img_link'), productControler.create);

router.get('/categories', categoryController.index);
router.post('/categories', categoryController.create);

export { router };