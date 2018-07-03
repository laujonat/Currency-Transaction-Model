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
      const sendingUser = action.fromUser;
      let newWallet = state[sendingUser] - action.amt;
      return {
        ...state,
        // state[sendingUser]: newAmt
      }
    default:
      return state;
  }
};


export default userReducer;
