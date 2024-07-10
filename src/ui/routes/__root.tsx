import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AuthContext } from '@/ui/hooks/useAuth.ts'

const RootComponent = () => {
  return (
    <div className='flex min-h-screen'>
      <Outlet />
    </div>
  )
}

export const Route = createRootRouteWithContext<IRootRouterContext>()({
  component: RootComponent
})

export interface IRootRouterContext {
  queryClient: QueryClient
  authentication: AuthContext
}
