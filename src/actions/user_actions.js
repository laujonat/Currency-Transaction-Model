export const FETCH_USER_WALLET = 'FETCH_USER_WALLET';
export const SEND_USER_FUNDS = 'SEND_USER_FUNDS';

export const fillWallets = () => ({
  type: FETCH_USER_WALLET,
});

export function fillUserWallet() {
  return dispatch => {
      dispatch(fillWallets());
  };
}
