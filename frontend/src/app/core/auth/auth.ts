import { User } from '../../shared/interfaces/user';

export interface AuthResponse {
  user: User,
  token: string
}
