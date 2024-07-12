import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AuthContext } from '@/ui/hooks/useAuth.ts'
import { SessionContext } from '@/ui/hooks/useSession.ts'

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
  session: SessionContext
}
