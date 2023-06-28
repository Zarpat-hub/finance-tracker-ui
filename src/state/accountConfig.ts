const LOAD = 'config/LOAD'
const UPDATE_BASE = 'config/UPDATE_BASE'
const ADD_CONSTANT_SPENDING = 'config/ADD_SPENDING'
const ADD_EARNING = 'config/ADD_EARNING'
const ADD_GOAL = 'config/ADD_GOAL'
const EDIT_GOAL = 'config/EDIT_GOAL'
const DELETE_GOAL = 'config/DELETE_GOAL'

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
type SpendingType = 'Constant' | 'Single'
type Priority = 'Low' | 'Medium' | 'High'

export type BaseConfig = {
  currency: string
  savings: number
  balance: number
  payDay: number
  spendingLimit: number
}

export type Spending = {
  category: Categories
  type: SpendingType
  frequence: Frequence
  description: string
  value: number
  date: string
}

export type Earning = {
  name: string
  value: number
}

export type SingleEarning = {
  name: string
  value: number
  date: string
}

export type Goal = {
  value: number
  name: string
  priority: Priority
  deadline: string
}

export type Config = {
  currency: string
  balance: number
  savings: number
  payDay: number
  spendingLimit: number
  earnings: Earning[]
  constantSpendings: Spending[]
  goals: Goal[]
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

export const createActionConstantSpendingAdd = (spending: Spending) => {
  return {
    type: ADD_CONSTANT_SPENDING,
    payload: spending,
  }
}

export const createActionEarningAdd = (earning: Earning) => {
  return {
    type: ADD_EARNING,
    payload: earning,
  }
}

export const createActionGoalAdd = (goal: Goal) => {
  return {
    type: ADD_GOAL,
    payload: goal,
  }
}

export const createActionEditGoal = (goal: Goal) => {
  return {
    type: EDIT_GOAL,
    payload: goal,
  }
}

export const createActionDeleteGoal = (goal: Goal) => {
  return {
    type: DELETE_GOAL,
    payload: goal,
  }
}

export const initialState: Config = {
  currency: '',
  balance: 0,
  payDay: 0,
  savings: 0,
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
    case ADD_CONSTANT_SPENDING:
      return {
        ...state,
        constantSpendings: [...state.constantSpendings, action.payload],
      }
    case ADD_EARNING:
      return { ...state, earnings: [...state.earnings, action.payload] }
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] }
    case DELETE_GOAL:
      const index = state.goals.indexOf(action.payload)
      const newArray = [...state.goals]
      newArray.splice(index, 1)
      return {
        ...state,
        goals: newArray,
      }

    default:
      return state
  }
}

export default reducer
