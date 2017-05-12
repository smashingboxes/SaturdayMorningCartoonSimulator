import { USER_LOGIN, USER_LOGOUT} from '../constants/ActionTypes'

const initialState = {
  user: {
    id: undefined
  }
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {...state, user:{...state.user, id: action.id}};
    case USER_LOGOUT:
      return {...state, user:{...state.user, id: undefined}};

    default:
      return state
  }
}
