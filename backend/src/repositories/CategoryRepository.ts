import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../models/Category';

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {}

export { CategoryRepository };