const LOAD = 'userData/LOAD'
const CHANGE_IMG = 'userData/CHANGE_IMG'
const UPDATE_INFO = 'userData/UPDATE_INFO'

export type UserData = {
  username: string
  email: string
  userImg: string
}

export const createUserActionLoad = (userData: any) => {
  return {
    type: LOAD,
    payload: userData,
  }
}

export const updateUserImg = (imgUrl: string) => {
  return {
    type: CHANGE_IMG,
    payload: imgUrl,
  }
}

export const updateUserInfo = (userData: any) => {
  return {
    type: UPDATE_INFO,
    payload: userData,
  }
}

export const initialState: UserData = {
  username: '',
  email: '',
  userImg: '',
}

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOAD:
      return action.payload
    case CHANGE_IMG:
      return {
        ...state,
        userImg: action.payload,
      }
    case UPDATE_INFO:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      }
    default:
      return state
  }
}

export default reducer
