import { PostLoginUseCase } from '@/domain/useCase/PostLoginUseCase.ts'
import { HttpPostLoginRepository } from '@/infrastructure/repository/HttpPostLoginRepository.ts'
import { axiosInstance } from '@/infrastructure/middleware/AxiosInstance.ts'

export const postLoginUseCase: PostLoginUseCase = new PostLoginUseCase(
  new HttpPostLoginRepository(axiosInstance)
)
