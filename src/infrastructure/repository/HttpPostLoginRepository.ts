import { PostLoginRepository } from '@/domain/repository/PostLoginRepository.ts'
import { Login } from '@/domain/model/Login.ts'
import { User } from '@/domain/model/User.ts'
import { AxiosInstance } from 'axios'
import { UserHttp } from '@/infrastructure/model/response/UserHttp.ts'
import { UserHttpToUser } from '@/infrastructure/mapper/UserHttpToUser.ts'

export class HttpPostLoginRepository implements PostLoginRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async postLogin(login: Login): Promise<User> {
    const userHttpToUser: UserHttpToUser = new UserHttpToUser()
    const { data } = await this.axios.post<UserHttp>('/auth/login', login)
    return userHttpToUser.map(data)
  }
}
