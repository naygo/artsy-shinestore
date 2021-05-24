import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../models/Order';

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {}

export { OrderRepository };