(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();function t(e="home"){return`
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
          <li><a href="#home" class="nav-btn ${e==="home"?"active":""}"><i class="fas fa-home"></i> HOME</a></li>
          <li><a href="#books" class="nav-btn ${e==="books"?"active":""}"><i class="fas fa-book"></i> BOOKS & PDFS</a></li>
          <li><a href="#audio" class="nav-btn ${e==="audio"?"active":""}"><i class="fas fa-headphones"></i> AUDIO MEHFIL</a></li>
          <li><a href="#videos" class="nav-btn ${e==="videos"?"active":""}"><i class="fas fa-video"></i> VIDEOS</a></li>
        </ul>
      </div>
    </header>
  `}function h(){return`
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
  `}function a(){return`
    <footer class="footer-card">
      <div class="footer-container">
        <div class="footer-info">
          <h3>BAZAM-E-SAIM</h3>
          <p>© 2026 All Rights Reserved | Digital Islamic Portal</p>
        </div>
      </div>
    </footer>
  `}const p=[{id:1,title:"عرفان القرآن",author:"ڈاکٹر محمد طاہر القادری",cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400",pdf:"#"},{id:2,title:"المنہاج السوی",author:"ڈاکٹر محمد طاہر القادری",cover:"https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400",pdf:"#"},{id:3,title:"سیرتِ رسولِ عربی",author:"علامہ نور بخش توکلی",cover:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400",pdf:"#"},{id:4,title:"الفیوضات النبویہ",author:"شاہ ولی اللہ محدث دہلوی",cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400",pdf:"#"}],u=[{title:"نعتِ شریف - یا نبی سلام علیک",duration:"05:20",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},{title:"بیان - شانِ مصطفیٰ ﷺ",duration:"18:45",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},{title:"محفلِ ذکر و نعت",duration:"12:10",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"}],f=[{title:"جمعہ کا خطبہ - اخلاقِ حسنہ",embed:"https://www.youtube.com/embed/tgbNymZ7vqY"},{title:"بیان - عظمتِ والدین",embed:"https://www.youtube.com/embed/tgbNymZ7vqY"}];function m(){return`
    ${t("home")}
    ${h()}

    <div class="main-wrapper">
      <!-- 1. Featured Books Section -->
      <section class="content-section">
        <h2><i class="fas fa-book-open"></i> منتخب اسلامی کتب (Featured Books & PDFs)</h2>
        <div class="books-grid" id="homeBooksGrid">
          ${p.map(e=>`
            <div class="book-card">
              <img src="${e.cover}" alt="${e.title}">
              <h3>${e.title}</h3>
              <p style="font-size: 0.75rem; color: #666; margin-bottom: 8px;">${e.author}</p>
              <a class="btn-read" href="${e.pdf}" target="_blank">Read / Download</a>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- 2. Latest Audios Section -->
      <section class="content-section">
        <h2><i class="fas fa-microphone-alt"></i> تازہ ترین صوتی محافل (Audio Mehfils)</h2>
        <div class="audio-list">
          ${u.map(e=>`
            <div class="audio-item">
              <div>
                <strong>${e.title}</strong>
                <span style="font-size: 0.75rem; color: #777; display: block;">Duration: ${e.duration}</span>
              </div>
              <audio controls src="${e.src}"></audio>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- 3. Videos Section -->
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو بیانات (Video Bayanat)</h2>
        <div class="video-grid">
          ${f.map(e=>`
            <div class="video-card">
              <iframe width="100%" height="200" src="${e.embed}" frameborder="0" allowfullscreen></iframe>
              <h4 style="padding: 10px;">${e.title}</h4>
            </div>
          `).join("")}
        </div>
      </section>
    </div>

    ${a()}
  `}function v(){return`
    ${t("books")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-book"></i> تمام اسلامی کتب (All Books & PDFs)</h2>
        <p>تمام پی ڈی ایف کتب کی مکمل فہرست یہاں موجود ہے۔</p>
      </section>
    </div>
    ${a()}
  `}function b(){return`
    ${t("audio")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-headphones"></i> آڈیو لائبریری (Audio Library)</h2>
        <p>تمام نعتیں اور بیانات یہاں سے سنیں۔</p>
      </section>
    </div>
    ${a()}
  `}function g(){return`
    ${t("videos")}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو گیلری (Video Gallery)</h2>
        <p>تمام بیانات اور وڈیوز یہاں دستیاب ہیں۔</p>
      </section>
    </div>
    ${a()}
  `}const i=document.getElementById("app");function d(){const e=window.location.hash||"#home";e==="#books"?i.innerHTML=v():e==="#audio"?i.innerHTML=b():e==="#videos"?i.innerHTML=g():i.innerHTML=m()}window.addEventListener("hashchange",d);window.addEventListener("DOMContentLoaded",d);
