import {
  FETCH_USER_WALLET,
  SEND_USER_FUNDS
} from '../actions/user_actions';

const initialState = {
  userA: Math.floor((Math.random() * 100) + 50),
  userB: Math.floor((Math.random() * 100) + 50),
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_WALLET:
      return state;
    case SEND_USER_FUNDS:
      const fromUser = action.fromUser;
      const toUser = action.toUser;
      let amt = Number(action.amt);

      return {
        ...state,
        [fromUser]: state[fromUser] - amt,
        [toUser]: state[toUser] + amt
      }
    default:
      return state;
  }
};


export default userReducer;
