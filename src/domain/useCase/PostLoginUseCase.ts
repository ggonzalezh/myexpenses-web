import { PostLoginRepository } from '@/domain/repository/PostLoginRepository.ts'
import { Login } from '@/domain/model/Login.ts'
import { User } from '@/domain/model/User.ts'

export class PostLoginUseCase {
  constructor(private readonly postLoginRepository: PostLoginRepository) {}

  async execute(login: Login): Promise<User> {
    return this.postLoginRepository.postLogin(login)
  }
}
