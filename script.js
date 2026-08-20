const convertButton = document.querySelector(".convert-button")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencySelect = document.querySelector(".currency-select").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
   
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 378000
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
        style: "currency", 
        currency: "BRL" 
    }).format(inputCurrencyValue)

    if(currencySelect == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD" 
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency", 
            currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

}

convertButton.addEventListener("click", convertValues)