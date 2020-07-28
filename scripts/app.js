const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('quote-new');
const tweetBtn = document.getElementById('twitter-btn');

async function getQuote() {
    const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'

    try {
        const response = await fetch(proxyURL + apiURL);
        const data = await response.json();
        // console.log(data);
        return data;
    }

    catch(e) {
        console.log(e);
        //getQuote();
    }
}

// const data = '{"quoteText":"A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.  ", "quoteAuthor":"Chuck Norris", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/2bc6cf0fd5/"}'

newQuoteBtn.addEventListener('click', () => {
    const data = getQuote();
    console.log(data);
    // const dataJson = JSON.parse(data);
    quoteText.innerText = data.quoteText;

    quoteAuthor = data.quoteAuthor === "" ? "Unknow" : data.quoteAuthor;

    author.innerText = `- ${quoteAuthor}`;
})

tweetBtn.addEventListener('click', () => {
    const dataJson = JSON.parse(data);
    const quoteText = dataJson.quoteText;
    const quoteAuthor = dataJson.quoteAuthor === "" ? "Unknow" : dataJson.quoteAuthor;

    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
    window.open(tweetURL, '_blank');
})
