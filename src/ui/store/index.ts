import { Store } from '@tanstack/react-store'
import { User } from '@/domain/model/User.ts'
import { sessionDefaultValue } from '@/ui/store/common/defaultValues.ts'

export const myExpensesStore = new Store<IMyExpensesStore>({
  isAuthenticated: false,
  session: sessionDefaultValue
})

interface IMyExpensesStore {
  isAuthenticated: boolean
  session: User
}
