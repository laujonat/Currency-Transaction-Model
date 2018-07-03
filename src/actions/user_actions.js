export const FETCH_USER_WALLET = 'FETCH_USER_WALLET';
export const SEND_USER_FUNDS = 'SEND_USER_FUNDS';
export const RECEIVE_USER_FUNDS = 'RECEIVE_USER_FUNDS';

export const fillWallets = () => ({
  type: FETCH_USER_WALLET,
});

export const sendFunds = (amt, fromUser) => ({
  type: SEND_USER_FUNDS,
  amt,
  fromUser
});

export function fillUserWallet() {
  return dispatch => {
    dispatch(fillWallets());
  };
}

export function sendUserFunds(amt, fromUser) {
  return dispatch => {
    dispatch(sendFunds(amt, fromUser));
  };
}
