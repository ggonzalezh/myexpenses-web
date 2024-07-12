import { User } from '@/domain/model/User.ts'
import { myExpensesStore } from '@/ui/store'
import { sessionDefaultValue } from '@/ui/store/common/defaultValues.ts'

export const useSession = () => {
  const getSession = (): User => myExpensesStore.state.session
  const setSession = (user: User): void => {
    myExpensesStore.setState((states) => {
      return {
        ...states,
        session: user
      }
    })
  }
  const clearSession = (): void => {
    myExpensesStore.setState((states) => {
      return {
        ...states,
        session: sessionDefaultValue
      }
    })
  }

  return { getSession, setSession, clearSession }
}

export type SessionContext = ReturnType<typeof useSession>
