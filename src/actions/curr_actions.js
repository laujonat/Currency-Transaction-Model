export const FETCH_CURRENCIES_BEGIN = 'FETCH_CURRENCIES_BEGIN';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';


export const fetchCurrenciesBegin = () => ({
  type: FETCH_CURRENCIES_BEGIN,
});

export const fetchCurrenciesSuccess = curr => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: { curr },
});

export const fetchCurrenciesError = error => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: { error },
});

export function fetchCurrencies() {
  const host = 'http://free.currencyconverterapi.com/';

  return (dispatch) => {
    dispatch(fetchCurrenciesBegin());
    return fetch(`${host}api/v5/currencies`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        const currencies = {};
        const currencyName = Object.values(json.results).forEach((el) => {
          currencies[el.currencyName] = el.id;
        });
        dispatch(fetchCurrenciesSuccess(currencies));
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
