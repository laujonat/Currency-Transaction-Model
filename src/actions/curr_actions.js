export const FETCH_CURRENCIES_BEGIN = 'FETCH_CURRENCIES_BEGIN';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';


export const fetchCurrenciesBegin = () => ({
  type: FETCH_CURRENCIES_BEGIN
});

export const fetchCurrenciesSuccess = curr => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: { curr }
});

export const fetchCurrenciesError = error => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: { error }
});

export function fetchCurrencies() {
  const host = 'http://free.currencyconverterapi.com/';
  const c1 = 'USD';
  const c2 = 'BTC';

  return dispatch => {
    dispatch(fetchCurrenciesBegin());
    return fetch(`${host}api/v5/convert?q=${c1}_${c2},${c2}_${c1}&compact=ultra`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // const oneToTwo = c1 + "_" + c2;
        // const twoToOne = c2 + "_" + c1;
        // dispatch(fetchCurrenciesSuccess(json.products))
    })
    .catch(error => dispatch(fetchCurrenciesError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
