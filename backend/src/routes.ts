import { Router } from 'express';
import multer from 'multer';
import storage from './config/multer';

import { ProductController } from './controllers/ProductController';
import { UserController } from './controllers/UserController';

const router = Router();

const upload = multer(storage);

const userControler = new UserController();
const productControler = new ProductController();

router.get('/users', userControler.index);
router.post('/users', userControler.create);

router.post('/login', userControler.login);

router.get('/products', productControler.index);
router.post('/products', upload.single('img_link'), productControler.create);


export { router };