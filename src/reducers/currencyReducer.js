import {
  FETCH_CURRENCIES_BEGIN,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE
} from '../actions/curr_actions';

const initialState = {
  curr: [],
  loading: false,
  error: null
};

const currencyReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CURRENCIES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CURRENCIES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the curr with the ones from the server
      return {
        ...state,
        loading: false,
        curr: action.payload.curr
      };

    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        curr: []
      };
    default:
      return state;
  }
};

export default currencyReducer;
