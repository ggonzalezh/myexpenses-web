import { myExpensesStore } from '@/ui/store'

export const useAuth = () => {
  const sigIn = (): void => {
    myExpensesStore.setState((states) => {
      return {
        ...states,
        isAuthenticated: true
      }
    })
  }

  const signOut = (): void => {
    myExpensesStore.setState((states) => {
      return {
        ...states,
        isAuthenticated: false
      }
    })
  }

  const isAuthenticated = (): boolean => myExpensesStore.state.isAuthenticated

  return { sigIn, signOut, isAuthenticated }
}

export type AuthContext = ReturnType<typeof useAuth>
