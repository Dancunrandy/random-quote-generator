var quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
];
function generateQuote() {
    var _a;
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quote');
    if (quoteElement instanceof HTMLElement) {
        quoteElement.textContent = (_a = quotes[randomIndex]) !== null && _a !== void 0 ? _a : null; // Fallback to null if undefined
    }
    else {
        console.warn('Element with ID "quote" not found or is not an HTMLElement');
    }
}
var button = document.getElementById('generate-quote');
if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', generateQuote);
}
else {
    console.warn('Button with ID "generate-quote" not found or is not a button element');
}
