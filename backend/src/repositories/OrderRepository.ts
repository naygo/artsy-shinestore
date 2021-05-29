import { EntityRepository, Repository } from 'typeorm';
import { Orders } from '../entities/Orders';

@EntityRepository(Orders)
class OrderRepository extends Repository<Orders> {}

export { OrderRepository };