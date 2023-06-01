var quotes = [
     "It's not the size of the dog in the fight, but the size of the fight in the dog. - Archie Griffin ",
     "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. - Albert Einstein",
     "You can't predict the future. You can only control the present moment. ",
     "Life is what happens when you're busy making other plans. -John Lennon",
     "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
     "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
     "It is during our darkest moments that we must focus to see the light. -Aristotle",
     "Success is not final, failure is not fatal: It is the courage to continue that counts - Winston Churchill",
     "The best way to predict the future is to invent it. - Steve Jobs",
     "The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway",
     ]

function newQuote() {
     var randomNumber = Math.floor(Math.random() * (quotes.length));
     document.getElementById('quote-display').innerHTML = quotes[randomNumber];
}
