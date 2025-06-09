//dynamic quote

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Do something today that your future self will thank you for. – Sean Patrick Flanery",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs"
];

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "pink",
  "cyan",
  "magenta",
  "teal"
];

function load(){
const select = Math.floor(Math.random()*quotes.length);
const selectcolor = Math.floor(Math.random()*colors.length);

const quote_holder =document.getElementById('quote');
quote_holder.innerHTML=quotes[select];
const color_holder =document.querySelector('body');
color_holder.style.backgroundColor = colors[selectcolor]; // Use camelCase

}

setInterval(load,1000);