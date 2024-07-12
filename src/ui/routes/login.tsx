import { createFileRoute } from '@tanstack/react-router'
import { postLoginUseCase } from '@/common/Configuration.ts'
import { LoginView } from '@/ui/views/login'

export const Route = createFileRoute('/login')({
  component: () => <LoginView postLoginUseCase={postLoginUseCase} />
})
