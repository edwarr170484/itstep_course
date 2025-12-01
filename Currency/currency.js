async function getCources(){
    let inputs = [...document.querySelectorAll(".currency-value input")];

    /*let myHeaders = new Headers();
    myHeaders.append("apikey", "6bUt7lXJz5YGEkMeXSpwjJpSXW2x8rCy");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    let response = await fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions);

    let cources = await response.json();*/

    let cources = {
        "quotes": {
            "USDBYN": 2.901379,
            "USDEUR": 0.86013,
            "USDRUB": 77.723991
        },
        "source": "USD",
        "success": true,
        "timestamp": 1764607028
    };

    let calculateCources = function(inputs, element){
        let usd = document.querySelector('input[name="USD"]');
        let usdValue = usd.value;

        if(element.name != "USD"){
            let quota = cources.quotes[`USD${element.name}`];
            usdValue = element.value / quota;
            usd.value = usdValue;
        }

        for(let input of inputs) {
            if(input.name !== element.name && input.name != "USD") {
                let quota = cources.quotes[`USD${input.name}`];
                let value = usdValue * quota;
                input.value = value.toFixed(5);
            }
        }
    };

    calculateCources(inputs, inputs[0]);

    inputs.forEach((input, index, inputs) => {
        input.addEventListener('keyup', function() {
            calculateCources(inputs, this);
        });
    });
}

getCources();

