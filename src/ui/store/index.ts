import { Store } from '@tanstack/react-store'

export const myExpensesStore = new Store<IMyExpensesStore>({
  isAuthenticated: false
})

interface IMyExpensesStore {
  isAuthenticated: boolean
}
