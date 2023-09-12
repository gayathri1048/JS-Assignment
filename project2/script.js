const quoteContainer = document.querySelector('.quote');
const loadingMsg = document.querySelector('.quote p');
const newQuoteButton = document.getElementById('new-quote-btn');
async function fetchRandomQuoteInfo() {
  try {
    loadingMsg.textContent = 'Loading...';
    const res = await fetch('https://type.fit/api/quotes');
    if (!res.ok) {
      throw new Error('Failed to fetch a random quote');
    }
    const info = await res.json();
    const randomIndex = Math.floor(Math.random() * info.length);
    const randomQuote = info[randomIndex];
    const quoteText = randomQuote.text;
    const quoteAuthor = randomQuote.author || 'Unknown';
    const quoteHtml = `
      <p>"${quoteText}"</p>
      <p class="author">- ${quoteAuthor}</p>
    `;

    quoteContainer.innerHTML = quoteHtml;
  } catch (error) {
    console.error('Error:', error);
    loadingMessage.textContent = 'Failed to fetch a random quote';
  }
}
window.addEventListener('load', fetchRandomQuoteInfo);
newQuoteButton.addEventListener('click', fetchRandomQuoteInfo);