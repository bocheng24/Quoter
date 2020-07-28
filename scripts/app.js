const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('quote-new');
const tweetBtn = document.getElementById('twitter-btn');
const loader = document.querySelector('.loader');

const turnLoaderOn = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const turnLoaderOff = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


async function getQuote() {
    const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    
    try {
        turnLoaderOn();

        const response = await fetch(proxyURL + apiURL);
        const data = await response.json();
        
        quoteText.innerText = data.quoteText;
        quoteAuthor = data.quoteAuthor === "" ? "Unknow" : data.quoteAuthor;
        author.innerText = `- ${quoteAuthor}`;
        
        turnLoaderOn();
    }

    catch(e) {
        console.log(e);
        getQuote();
    }
}

window.addEventListener('load', turnLoaderOff);
newQuoteBtn.addEventListener('click', getQuote);

tweetBtn.addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').innerText;
    const quoteAuthor = document.getElementById('author').innerText;

    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText} ${quoteAuthor}`;
    window.open(tweetURL, '_blank');
});
