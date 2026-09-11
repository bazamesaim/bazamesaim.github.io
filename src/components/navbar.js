export function renderNavbar(activePage = 'home') {
  return `
    <header class="top-nav">
      <div class="nav-container">
        <a href="#home" class="logo">
          <span class="book-icon">📖</span>
          <div class="logo-text">
            <span class="sub-logo">ISLAMIC PORTAL</span>
            <div class="main-logo">BAZAM-E-<span>SAIM</span></div>
          </div>
        </a>
        <ul class="nav-links">
          <li><a href="#home" class="nav-btn ${activePage === 'home' ? 'active' : ''}"><i class="fas fa-home"></i> HOME</a></li>
          <li><a href="#books" class="nav-btn ${activePage === 'books' ? 'active' : ''}"><i class="fas fa-book"></i> BOOKS & PDFS</a></li>
          <li><a href="#audio" class="nav-btn ${activePage === 'audio' ? 'active' : ''}"><i class="fas fa-headphones"></i> AUDIO MEHFIL</a></li>
          <li><a href="#videos" class="nav-btn ${activePage === 'videos' ? 'active' : ''}"><i class="fas fa-video"></i> VIDEOS</a></li>
        </ul>
      </div>
    </header>
  `;
}