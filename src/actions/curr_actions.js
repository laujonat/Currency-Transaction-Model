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

  return dispatch => {
    dispatch(fetchCurrenciesBegin());
    return fetch('https://free.currencyconverterapi.com/api/v5/currencies')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCurrenciesSuccess(Object.keys(json.results).sort()));
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
