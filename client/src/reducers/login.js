import { USER_LOGIN, USER_LOGOUT} from '../constants/ActionTypes'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  user: {
    id: null
  }
})

export default function login(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state.setIn(["user", "id"], action.id);
    case USER_LOGOUT:
      return state.setIn(["user", "id"], null);

    default:
      return state
  }
}
