import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { OrderRepository } from '../repositories/OrderRepository';

class OrderController {
    async index(req: Request, res: Response) {
        const orderRepository = getCustomRepository(OrderRepository);

        const orders = await orderRepository.find();

        return res.status(200).json(orders);
    }

    async create(req: Request, res: Response) {
        const { user_id, product_id, quantity, status_id, date } = req.body;

        const orderRepository = getCustomRepository(OrderRepository);

        const order = orderRepository.create({
            user_id: +user_id,
            product_id: +product_id,
            quantity: quantity,
            status_id: +status_id,
            date
        });
        
        await orderRepository.save(order);
    }
}

export { OrderController }