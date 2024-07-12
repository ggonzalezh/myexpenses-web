import { Login } from '@/domain/model/Login.ts'
import { User } from '@/domain/model/User.ts'

export interface PostLoginRepository {
  postLogin(login: Login): Promise<User>
}
