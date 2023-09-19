const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY = " YQkgdt+GRxShdkARaBBr7A==98r4hlrCq7qXKBfY "
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () =>{
    console.log('Hi')
    const amountTotal = amount.value;
    console.log('total',amountTotal)
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url',url)

    fetch, (url,{
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        console.log('rate', rate)
        const resultPrice = amountTotal * rate;
        console.log = ('result', resultPrice)
        result.innerHTML = '${amount} ${currency} = ${resultPrice.toFixed(2)} USD';
    })
    .catch(error => {
        console.error('request failed', error);
        result.innerHTML = ' Error. Please try again.'
    })
})
