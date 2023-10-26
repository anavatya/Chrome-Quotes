document.addEventListener("DOMContentLoaded", function () {
  var quoteElement = document.getElementById("quote");
  var backgroundElement = document.getElementById("background");
  var changeQuoteButton = document.getElementById("change-quote");

  // Array of motivational quotes
  var quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
  ];

  // Function to change the quote and background
  function changeQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    quoteElement.textContent = `"${randomQuote.text}" \n\n ${randomQuote.author}`;
    backgroundElement.src = `backgrounds/background${randomIndex + 1}.jpg`;
  }

  // Event listener for the button click
  changeQuoteButton.addEventListener("click", changeQuote);

  // Initial quote and background setup
  changeQuote();
});
