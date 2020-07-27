async function getQuote() {
    const apiURL = 'https://api.forismatic.com/api/1.0//?method=getQuote&lang=en&format=json';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'

    try {
        const response = await fetch(proxyURL + apiURL);
        const data = await response.json();
        console.log(data);
    }

    catch(e) {
        console.log(e);
        getQuote();
    }
}

getQuote();