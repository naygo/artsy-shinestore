import { getConnection, getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { OrderRepository } from '../repositories/OrderRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import { StatusRepository } from '../repositories/StatusRepository';

class OrderController {
    async index(req: Request, res: Response) {
        const orderRepository = getCustomRepository(OrderRepository);

        const orders = await orderRepository.find();

        return res.status(200).json(orders);
    }

    async findUserOrders(req: Request, res: Response) {
        const { user_id } = req.params;
        
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findOne({ where: { id: user_id } })

        const orderRepository= getCustomRepository(OrderRepository);
        const orders = await orderRepository.find({ where: { user }})

        return res.status(200).json(orders);
    }

    async create(req: Request, res: Response) {
        try {
            const { user_id, product_id } = req.params;
            const { quantity, date } = req.body;

            const orderRepository: any = getCustomRepository(OrderRepository);
            const productRepository = getCustomRepository(ProductsRepository);
            const userRepository = getCustomRepository(UsersRepository);
            const statusRepository = getCustomRepository(StatusRepository);

            const product = await productRepository.findOne({ where: { id: product_id } })
            const user = await userRepository.findOne({ where: { id: user_id } })
            const status = await statusRepository.findOne({ where: { id: 0 } })

            const order = orderRepository.create({
                quantity,
                date,
                user,
                product,
                status
            });

            await orderRepository.save(order);

            return res.json(order);

        } catch (error) {
            console.log(error);
        }
    }

    async changeStatus(req: Request, res: Response) {
        try {
            const { order_id, status_id } = req.params

            const orderRepository = getCustomRepository(OrderRepository);
            const statusRepository = getCustomRepository(StatusRepository);

            const status = await statusRepository.findOne(status_id);

            const order = await orderRepository.save({
                id: order_id,
                status
            })

            return res.status(201).json(order);

        } catch (error) {
            console.log(error);
        }
    }
}

export { OrderController }