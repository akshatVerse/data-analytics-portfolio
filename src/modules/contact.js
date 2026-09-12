/* ============================================================
   CONTACT CONTROLLER
   Professional direct communication & email clipboard helper
   ============================================================ */

import { siteData } from '../data.js';

export function initContact() {
  const copyBtn = document.querySelector('#copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = siteData.contact.email;
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Email Copied!
        `;
        copyBtn.style.backgroundColor = 'var(--color-accent)';
        copyBtn.style.color = 'var(--color-accent-text)';
        copyBtn.style.borderColor = 'var(--color-accent)';

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.backgroundColor = '';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        // Fallback: select text or open mailto
        window.location.href = `mailto:${email}`;
      }
    });
  }
}
