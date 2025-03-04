import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/ui/routeTree.gen.ts'
import { useAuth } from '@/ui/hooks/useAuth.ts'
import { useSession } from '@/ui/hooks/useSession.ts'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    authentication: undefined!,
    session: undefined!
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  const authentication = useAuth()
  const session = useSession()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ authentication, session }} />
    </QueryClientProvider>
  )
}
