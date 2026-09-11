import { renderHomePage } from './src/pages/home.js';
import { renderBooksPage } from './src/pages/bookspage.js';
import { renderAudioPage } from './src/pages/audiopage.js';
import { renderVideosPage } from './src/pages/videos.js';

const app = document.getElementById('app');

function router() {
  const hash = window.location.hash || '#home';

  if (hash === '#books') {
    app.innerHTML = renderBooksPage();
  } else if (hash === '#audio') {
    app.innerHTML = renderAudioPage();
  } else if (hash === '#videos') {
    app.innerHTML = renderVideosPage();
  } else {
    app.innerHTML = renderHomePage();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);