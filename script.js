const convertButton = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".currency-to-convert")
const currencyConverted = document.querySelector(".currency-converted")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
   
    const realToday = 1
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 378000
    const libraToday = 7.1
    
    if(currencyToConvert.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue)

        if(currencyConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue/ realToday)
        }

        if(currencyConverted.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency", 
                currency: "USD" 
            }).format(inputCurrencyValue / dolarToday)
        }

        if(currencyConverted.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue / euroToday)
        }

        if(currencyConverted.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue / bitcoinToday)
        }

        if(currencyConverted.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" 
            }).format(inputCurrencyValue / libraToday)
        }

    }

    if(currencyToConvert.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD" 
        }).format(inputCurrencyValue)

        if(currencyConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue * dolarToday / realToday)
        }

        if(currencyConverted.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency", 
                currency: "USD" 
            }).format(inputCurrencyValue)
        }

        if(currencyConverted.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * dolarToday / euroToday)
        }

        if(currencyConverted.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * dolarToday / bitcoinToday)
        }

        if(currencyConverted.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" 
            }).format(inputCurrencyValue * dolarToday / libraToday)
        }

    }

    if(currencyToConvert.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency", 
            currency: "EUR" 
        }).format(inputCurrencyValue)

        if(currencyConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue * euroToday / realToday)
        }

        if(currencyConverted.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency", 
                currency: "USD" 
            }).format(inputCurrencyValue * euroToday / dolarToday)
        }

        if(currencyConverted.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * euroToday / euroToday)
        }

        if(currencyConverted.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * euroToday / bitcoinToday)
        }

        if(currencyConverted.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" 
            }).format(inputCurrencyValue * euroToday / libraToday)
        }

    }

    if(currencyToConvert.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue)

        if(currencyConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue * bitcoinToday / realToday)
        }

        if(currencyConverted.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency", 
                currency: "USD" 
            }).format(inputCurrencyValue * bitcoinToday / dolarToday)
        }

        if(currencyConverted.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * bitcoinToday / euroToday)
        }

        if(currencyConverted.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * bitcoinToday / bitcoinToday)
        }

        if(currencyConverted.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" 
            }).format(inputCurrencyValue * bitcoinToday / libraToday)
        }

    }

    if(currencyToConvert.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency", 
            currency: "GBP" 
        }).format(inputCurrencyValue)

        if(currencyConverted.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        }).format(inputCurrencyValue * libraToday/ realToday)
        }

        if(currencyConverted.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency", 
                currency: "USD" 
            }).format(inputCurrencyValue * libraToday/ dolarToday)
        }

        if(currencyConverted.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue *libraToday/ euroToday)
        }

        if(currencyConverted.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrencyValue * libraToday / bitcoinToday)
        }

        if(currencyConverted.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" 
            }).format(inputCurrencyValue * libraToday / libraToday)
        }

    }
    

}

function changeIcons() {
    const currencyImg = document.querySelector(".currency-img")
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")

        if(currencyToConvert.value == "real"){
        currencyNameToConvert.innerHTML = "Real"
        currencyImg.src = "./assets/brasil.png"
    }

        if(currencyToConvert.value == "dolar"){
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/usa.png"
    }

        if(currencyToConvert.value == "bitcoin"){
        currencyNameToConvert.innerHTML = "bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(currencyToConvert.value == "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencyToConvert.value == "libra"){
        currencyNameToConvert.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()
}

function changeIconsConverted(){
    const currencyImg = document.querySelector(".currency-converted-img")
    const currencyName = document.querySelector(".currency-name-converted")

        if(currencyConverted.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil.png"
    }

        if(currencyConverted.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/usa.png"
    }

        if(currencyConverted.value == "bitcoin"){
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(currencyConverted.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencyConverted.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues()
}

currencyConverted.addEventListener("change", changeIconsConverted)
currencyToConvert.addEventListener("change" , changeIcons )
convertButton.addEventListener("click", convertValues)