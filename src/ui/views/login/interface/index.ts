import { Login } from '@/domain/model/Login.ts'
import { User } from '@/domain/model/User.ts'

interface PostLoginUseCase {
  execute: (login: Login) => Promise<User>
}

export interface LoginViewProps {
  postLoginUseCase: PostLoginUseCase
}
