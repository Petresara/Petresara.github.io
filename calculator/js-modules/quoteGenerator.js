const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

export function generateRandomQuote() {
    const randomIndex = 
        Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

let index = 0;
export function generateNextQuote() {
    return quotes[index++];
}