import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import accountConfigReducer from './state/accountConfig'
import userDataReducer from './state/userData'

const LOCAL_STORAGE_KEY = 'WealthWise'
const preloadedState =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) || undefined

const rootReducer = combineReducers({
  accountConfig: accountConfigReducer,
  userData: userDataReducer,
})

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  const state = store.getState()
  const { userData, accountConfig } = state
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({ userData, accountConfig })
  )
})

export default store
