import { renderNavbar } from '../components/navbar.js';
import { renderHero } from '../components/hero.js';
import { renderFooter } from '../components/footer.js';

// Demo Data for Home Page
const demoBooks = [
  { id: 1, title: "عرفان القرآن", author: "ڈاکٹر محمد طاہر القادری", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400", pdf: "#" },
  { id: 2, title: "المنہاج السوی", author: "ڈاکٹر محمد طاہر القادری", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400", pdf: "#" },
  { id: 3, title: "سیرتِ رسولِ عربی", author: "علامہ نور بخش توکلی", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400", pdf: "#" },
  { id: 4, title: "الفیوضات النبویہ", author: "شاہ ولی اللہ محدث دہلوی", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400", pdf: "#" }
];

const demoAudios = [
  { title: "نعتِ شریف - یا نبی سلام علیک", duration: "05:20", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "بیان - شانِ مصطفیٰ ﷺ", duration: "18:45", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "محفلِ ذکر و نعت", duration: "12:10", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

const demoVideos = [
  { title: "جمعہ کا خطبہ - اخلاقِ حسنہ", embed: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { title: "بیان - عظمتِ والدین", embed: "https://www.youtube.com/embed/tgbNymZ7vqY" }
];

export function renderHomePage() {
  return `
    ${renderNavbar('home')}
    ${renderHero()}

    <div class="main-wrapper">
      <!-- 1. Featured Books Section -->
      <section class="content-section">
        <h2><i class="fas fa-book-open"></i> منتخب اسلامی کتب (Featured Books & PDFs)</h2>
        <div class="books-grid" id="homeBooksGrid">
          ${demoBooks.map(book => `
            <div class="book-card">
              <img src="${book.cover}" alt="${book.title}">
              <h3>${book.title}</h3>
              <p style="font-size: 0.75rem; color: #666; margin-bottom: 8px;">${book.author}</p>
              <a class="btn-read" href="${book.pdf}" target="_blank">Read / Download</a>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 2. Latest Audios Section -->
      <section class="content-section">
        <h2><i class="fas fa-microphone-alt"></i> تازہ ترین صوتی محافل (Audio Mehfils)</h2>
        <div class="audio-list">
          ${demoAudios.map(audio => `
            <div class="audio-item">
              <div>
                <strong>${audio.title}</strong>
                <span style="font-size: 0.75rem; color: #777; display: block;">Duration: ${audio.duration}</span>
              </div>
              <audio controls src="${audio.src}"></audio>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 3. Videos Section -->
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو بیانات (Video Bayanat)</h2>
        <div class="video-grid">
          ${demoVideos.map(video => `
            <div class="video-card">
              <iframe width="100%" height="200" src="${video.embed}" frameborder="0" allowfullscreen></iframe>
              <h4 style="padding: 10px;">${video.title}</h4>
            </div>
          `).join('')}
        </div>
      </section>
    </div>

    ${renderFooter()}
  `;
}

// Search Logic Handler
export function setupHomeSearch() {
  const searchInput = document.getElementById('homeSearchInput');
  const searchBtn = document.getElementById('homeSearchBtn');

  if (searchBtn && searchInput) {
    const performSearch = () => {
      const query = searchInput.value.toLowerCase().trim();
      const filtered = demoBooks.filter(b => 
        b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)
      );

      const gridContainer = document.getElementById('homeBooksGrid');
      if (gridContainer) {
        if (filtered.length > 0) {
          gridContainer.innerHTML = filtered.map(book => `
            <div class="book-card">
              <img src="${book.cover}" alt="${book.title}">
              <h3>${book.title}</h3>
              <p style="font-size: 0.75rem; color: #666; margin-bottom: 8px;">${book.author}</p>
              <a class="btn-read" href="${book.pdf}" target="_blank">Read / Download</a>
            </div>
          `).join('');
        } else {
          gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">کوئی کتاب نہیں ملی</p>`;
        }
      }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
}