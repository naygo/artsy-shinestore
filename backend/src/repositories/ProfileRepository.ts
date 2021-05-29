import { EntityRepository, Repository } from 'typeorm';
import { Profiles } from '../entities/Profiles';

@EntityRepository(Profiles)
class ProfileRepository extends Repository<Profiles> {}

export { ProfileRepository };