import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

export function renderAudioPage() {
  return `
    ${renderNavbar('audio')}
    <div class="main-wrapper">
      <section class="content-section">
        <h2><i class="fas fa-headphones"></i> آڈیو لائبریری (Audio Library)</h2>
        <p>تمام نعتیں اور بیانات یہاں سے سنیں۔</p>
      </section>
    </div>
    ${renderFooter()}
  `;
}