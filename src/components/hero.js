export function renderHero() {
  return `
    <section class="hero-section">
      <div class="hero-content">
        <h2>Bazam-E-Saim Islamic Library & Multimedia Portal</h2>
        
        <div class="search-box">
          <input type="text" id="homeSearchInput" placeholder="کتاب، بیان یا نعت تلاش کریں...">
          <button id="homeSearchBtn" class="btn-search"><i class="fas fa-search"></i> SEARCH</button>
        </div>

        <p class="hero-desc">
          بزمِ صائم کے اس پورٹل پر آپ کو اسلامی کتب، صوتی محافل، اور مستند بیانات کا مکمل ذخیرہ میسر آئے گا۔
        </p>

        <div class="hero-buttons">
          <a href="#books" class="btn-red"><i class="fas fa-book-open"></i> EXPLORE BOOKS</a>
          <a href="#videos" class="btn-red"><i class="fas fa-play-circle"></i> WATCH VIDEOS</a>
        </div>
      </div>
    </section>
  `;
}