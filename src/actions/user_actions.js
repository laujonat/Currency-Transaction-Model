export const FETCH_USER_WALLET = 'FETCH_USER_WALLET';
export const SEND_USER_FUNDS = 'SEND_USER_FUNDS';

export const fillWallets = () => ({
  type: FETCH_USER_WALLET,
});

export const sendFunds = (amt, fromUser, toUser) => ({
  type: SEND_USER_FUNDS,
  amt,
  fromUser,
  toUser
});

export function fillUserWallet() {
  return dispatch => {
    dispatch(fillWallets());
  };
}

export function sendUserFunds(amt, fromUser) {
  let toUser = fromUser === 'userA' ? 'userB' : 'userA';
  
  return dispatch => {
    dispatch(sendFunds(amt, fromUser, toUser));
  };
}
