document.addEventListener('DOMContentLoaded', function () {
    getRandomQuote();
});

function getRandomQuote() {
    fetch('quotes.txt')
        .then(response => response.text())
        .then(data => {
            const quotes = data.split('\n').filter(Boolean);
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            displayQuote(randomQuote);
        })
        .catch(error => console.error('Error fetching quotes:', error));
}

function displayQuote(quote) {
    const quoteTextElement = document.getElementById('quote-text');
    quoteTextElement.textContent = quote;
}
