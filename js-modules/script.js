import { displayRandomQuote } from './quoteDisplay.js';

const buttonEl = document.getElementById('generateBtn');
buttonEl.addEventListener('click', displayRandomQuote);

displayRandomQuote();