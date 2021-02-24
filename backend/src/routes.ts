import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userControler = new UserController();

router.get('/users', userControler.index);
router.post('/users', userControler.create);

export { router };