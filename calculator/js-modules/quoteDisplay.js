import { generateRandomQuote } from './quoteGenerator.js';
export function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = generateRandomQuote();
}