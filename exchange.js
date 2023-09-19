const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY = " YQkgdt+GRxShdkARaBBr7A==98r4hlrCq7qXKBfY "
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () =>{
    const amountTotal = amount.ariaValueMax;
    const currencyTotal = currency.ariaValueMax;
    const url = apiUrl + currencyTotal;

    fetchurl, {
        headers: {
            'X-API-KEY': apiKey
        }
    }
    .then(response => response.json())
    .then(data => {
        const rate = data.rate;
        const resultPrice = amountTotal * rate;
        result.innerHTML = '${amount} ${currency} = ${resultPrice.toFixed(2)} USD';
    })
    .catch(error => {
        console.error('request failed', error);
        result.innerHTML = ' Error. Please try again.'
    })
    })
