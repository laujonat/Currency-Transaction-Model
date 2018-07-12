// import { } from '../actions/history_actions'; // does not exist
import {
  SEND_USER_FUNDS
} from '../actions/user_actions';

const initialState = [
  {
    from: 'userA',
    to: 'userB',
    amount: 100
  }
];

const historyReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case SEND_USER_FUNDS:
      newState = state;
      const transaction = {
        from: action.fromUser,
        to: action.toUser,
        amount: action.amt
      };

      newState.push(transaction);
      return newState;
    default:
      return state;
  }
};

export default historyReducer;
