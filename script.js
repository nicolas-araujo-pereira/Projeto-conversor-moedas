const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
   
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 378000
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
        style: "currency", 
        currency: "BRL" 
    }).format(inputCurrencyValue)

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD" 
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency", 
            currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

}

function changeIcons() {
    const currencyImg = document.querySelector(".currency-img")
    const currencyName = document.querySelector(".currency-converted")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/usa.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
}

currencySelect.addEventListener("change" , changeIcons )
convertButton.addEventListener("click", convertValues)