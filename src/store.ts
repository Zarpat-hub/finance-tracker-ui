import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import accountConfigReducer from './state/accountConfig'
import userDataReducer from './state/userData'

const rootReducer = combineReducers({
  accountConfig: accountConfigReducer,
  userData: userDataReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
