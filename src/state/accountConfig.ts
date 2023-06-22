const LOAD = 'config/LOAD'
const UPDATE_BASE = 'config/UPDATE_BASE'

type Categories =
  | 'Food'
  | 'Home'
  | 'Transport'
  | 'Healthcare'
  | 'Clothes'
  | 'Hygiene'
  | 'Kids'
  | 'Entertainment'
  | 'Debt'
  | 'Other'
type Frequence = 'Weekly' | 'Monthly' | 'Yearly'
type SpendingType = 'Single' | 'Constant'
type Priority = 'Low' | 'Medium' | 'High'

export type BaseConfig = {
  currency: string
  balance: number
  payDay: number
  spendingLimit: number
}

type Config = {
  currency: string
  balance: number
  payDay: number
  spendingLimit: number
  earnings: Array<{
    name: string
    value: number
  }>
  constantSpendings: Array<{
    category: Categories
    type: SpendingType
    frequence: Frequence
    description: string
    value: number
  }>
  goals: Array<{
    value: number
    name: string
    priority: Priority
    deadline: string
  }>
}

export const createActionBaseUpdate = (baseConfig: BaseConfig) => {
  return {
    type: UPDATE_BASE,
    payload: baseConfig,
  }
}

export const createActionLoad = (config: Config) => {
  return {
    type: LOAD,
    payload: config,
  }
}

export const initialState: Config = {
  currency: '',
  balance: 0,
  payDay: 0,
  spendingLimit: 0,
  earnings: [],
  constantSpendings: [],
  goals: [],
}

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UPDATE_BASE:
      return { ...state, ...action.payload }
    case LOAD:
      return action.payload
    default:
      return state
  }
}

export default reducer
