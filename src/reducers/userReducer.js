import { FETCH_USER_WALLET } from '../actions/user_actions';

const initialState = {
  userA: Math.floor((Math.random() * 100) + 50),
  userB: Math.floor((Math.random() * 100) + 50),
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_WALLET:
      return state;

    default:
      return state;
  }
};


export default userReducer;
