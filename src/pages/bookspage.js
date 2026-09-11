import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

export function renderBooksPage() {
  return `
    ${renderNavbar('books')}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-book"></i> تمام اسلامی کتب (All Books & PDFs)</h2>
        <p>تمام پی ڈی ایف کتب کی مکمل فہرست یہاں موجود ہے۔</p>
      </section>
    </div>
    ${renderFooter()}
  `;
}