import { EntityRepository, Repository } from 'typeorm';
import { Categories } from '../entities/Categories';

@EntityRepository(Categories)
class CategoryRepository extends Repository<Categories> {}

export { CategoryRepository };