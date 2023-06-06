const LOAD = 'expenses/LOAD'
const ADD = 'expenses/ADD'
const REMOVE = 'expenses/REMOVE'
const UPDATE = 'expenses/UPDATE'

type Expense = {
  id: number
  date: Date
  category: string
  description: string
  amount: number
}

export const createActionAdd = (expense: Expense) => {
  // change to async with thunk when API endpoint provided
  return {
    type: ADD,
    payload: expense,
  }
}

export const createActionRemove = (expenseId: number) => {
  return {
    type: REMOVE,
    payload: expenseId,
  }
}

export const createActionUpdate = (expense: Expense) => {
  return {
    type: UPDATE,
    payload: expense,
  }
}

export const createActionLoad = (expenses: Expense[]) => {
  return {
    type: LOAD,
    payload: expenses,
  }
}

export const initialState = {
  // remove '...state' if no additional load control states will be used
  expenses: [],
}

export const reducer = (
  state: { expenses: Expense[] } = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        expenses: action.payload,
      }
    }
    case ADD:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case REMOVE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      }
    case UPDATE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      }
    default:
      return state
  }
}

export default reducer
