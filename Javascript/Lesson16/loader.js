let message = document.createElement('span');
let frame = document.querySelector(".frame"); 

async function load() {
    let m = 3;

    if(m < 5) {
        return "Данные загружены успешно";
    } else {
        let error = new Error("Ошибка загрузки данных");
        throw error;
    }
}

setTimeout(async () => {
    try {
        message.innerText = await load();
    } catch(error) {
        message.innerText = error.message;
    } finally {
        frame.append(message);
        document.querySelector(".loader").remove();
    }
}, 3000);

let myHeaders = new Headers();
myHeaders.append("apikey", "6bUt7lXJz5YGEkMeXSpwjJpSXW2x8rCy");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result));
