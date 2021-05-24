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

router.get('/users', userControler.findAll);
router.get('/users/:id', userControler.findOne);
router.post('/users/:profile_id', userControler.create);
router.put('/users/:id', userControler.update);
router.delete('/users/:id', userControler.delete);

router.post('/login', userControler.login);

router.get('/products', productControler.index);
router.post('/products',  upload.single('img_link'), productControler.create);
router.put('/products/:id',  productControler.update);
router.delete('/products/:id',  productControler.delete);

router.get('/categories',  categoryController.index);
router.post('/categories', categoryController.create);
router.put('/categories/:id',  categoryController.update);
router.delete('/categories/:id',  categoryController.delete);

export { router };