import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

export function renderVideosPage() {
  return `
    ${renderNavbar('videos')}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-video"></i> ویڈیو گیلری (Video Gallery)</h2>
        <p>تمام بیانات اور وڈیوز یہاں دستیاب ہیں۔</p>
      </section>
    </div>
    ${renderFooter()}
  `;
}