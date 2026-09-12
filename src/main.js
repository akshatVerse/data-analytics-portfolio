import './styles/main.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/animations.css';
import './styles/responsive.css';

import { siteData } from './data.js';

import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations } from './modules/animations.js';
import { initSkills } from './modules/skills.js';
import { initProjects } from './modules/projects.js';
import { initContact } from './modules/contact.js';

// SVG Icon Helper
function getIconSvg(iconName) {
  switch (iconName) {
    case 'chart-bar':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`;
    case 'brain':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`;
    case 'magnifying-glass-chart':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
    case 'database':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'code':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'chart-line':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>`;
    case 'tools':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
    case 'users':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populatePage(siteData);
  
  initNavigation();
  initScrollAnimations();
  initSkills();
  initProjects();
  initContact();
});

function populatePage(data) {
  if (!data) return;

  // 1. SEO & Metadata
  if (data.seo) {
    document.title = data.seo.title || 'Akshat Tripathi | Data Analytics & Machine Learning';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = data.seo.description || '';

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = data.seo.title || '';

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = data.seo.description || '';

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg && data.seo.ogImage) ogImg.content = data.seo.ogImage;
  }

  // 2. Navigation Brand
  if (data.personal) {
    const navInitials = document.querySelector('#nav-initials');
    if (navInitials) navInitials.textContent = data.personal.firstName ? data.personal.firstName.charAt(0) : 'A';

    const navName = document.querySelector('#nav-name');
    if (navName) navName.textContent = data.personal.fullName || 'Akshat Tripathi';
  }

  // 3. Hero Section
  if (data.personal) {
    const heroFirst = document.querySelector('#hero-name-first');
    if (heroFirst) heroFirst.textContent = data.personal.firstName || 'Akshat';

    const heroSubtitle = document.querySelector('#hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = data.personal.subtitle || '';

    const heroProfileImg = document.querySelector('#hero-profile-img');
    if (heroProfileImg && data.personal.profileImage) {
      heroProfileImg.src = data.personal.profileImage;
      heroProfileImg.alt = data.personal.fullName || 'Akshat Tripathi';
    }

    const heroAvail = document.querySelector('#hero-availability');
    if (heroAvail && data.personal.availability) {
      heroAvail.innerHTML = `<span class="status-dot"></span> ${data.personal.availability.toUpperCase()}`;
    }
  }

  // Hero Resume & Social Links
  const heroResumeBtn = document.querySelector('#hero-resume-btn');
  if (heroResumeBtn && data.resume?.path) {
    heroResumeBtn.href = data.resume.path;
  }

  if (data.contact) {
    const linkedinLink = document.querySelector('#hero-linkedin-link');
    if (linkedinLink && data.contact.linkedin) {
      linkedinLink.href = data.contact.linkedin;
    }

    const githubLink = document.querySelector('#hero-github-link');
    if (githubLink && data.contact.github) {
      githubLink.href = data.contact.github;
    }
  }

  // 4. About Section
  if (data.about) {
    const aboutIntro = document.querySelector('#about-intro');
    if (aboutIntro) aboutIntro.textContent = data.about.intro || '';

    const aboutInterests = document.querySelector('#about-interests');
    if (aboutInterests && data.about.interests) {
      aboutInterests.innerHTML = data.about.interests.map(item => `
        <span class="tag tag--accent">${item}</span>
      `).join('');
    }

    const eduDegree = document.querySelector('#about-edu-degree');
    const eduMeta = document.querySelector('#about-edu-meta');
    if (data.education && data.education.length > 0) {
      const topEdu = data.education[0];
      if (eduDegree) eduDegree.textContent = `${topEdu.degree} in ${topEdu.field}`;
      if (eduMeta) eduMeta.textContent = `${topEdu.institution} • ${topEdu.score} • ${topEdu.period}`;
    }

    const aboutCards = document.querySelector('#about-focus-cards');
    if (aboutCards && data.about.focusAreas) {
      aboutCards.innerHTML = data.about.focusAreas.map(area => `
        <div class="about-focus-card">
          <div class="about-focus-card__icon">
            ${getIconSvg(area.icon)}
          </div>
          <h3 class="about-focus-card__title">${area.title}</h3>
          <p class="about-focus-card__desc">${area.description}</p>
        </div>
      `).join('');
    }
  }

  // 5. Skills Section
  if (data.skills) {
    const skillsContainer = document.querySelector('#skills-container');
    if (skillsContainer) {
      skillsContainer.innerHTML = data.skills.map(cat => {
        const isSoft = cat.category.toLowerCase().includes('soft');
        return `
          <div class="skill-cluster ${isSoft ? 'skill-cluster--soft' : ''}">
            <div class="skill-cluster__header">
              <div class="skill-cluster__icon">
                ${getIconSvg(cat.icon)}
              </div>
              <h3 class="skill-cluster__title">${cat.category}</h3>
            </div>
            <div class="skill-cluster__items">
              ${cat.items.map(skill => {
                // Subtle presentation for IDLE if applicable
                const isIdle = skill.toLowerCase() === 'idle';
                return `<span class="tag ${isSoft ? '' : 'tag--accent'} skill-tag" ${isIdle ? 'style="opacity: 0.85;" title="Development Environment"' : ''}>${skill}</span>`;
              }).join('')}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 6. Projects Section (Prominent Screenshot Slot & Case Study)
  if (data.projects) {
    const projectsContainer = document.querySelector('#projects-container');
    if (projectsContainer) {
      projectsContainer.innerHTML = data.projects.map(project => `
        <article class="project-case-study animate-on-scroll" id="${project.id}">
          <div class="project__grid">
            <div class="project__gallery" data-gallery-id="${project.id}">
              <div class="project__gallery-track">
                ${project.images.map((img, i) => `
                  <img src="${img}" alt="${project.title} Screenshot ${i + 1}" class="project-card__image ${i === 0 ? 'active' : ''}" data-index="${i}" loading="lazy">
                `).join('')}
              </div>
              ${project.images.length > 1 ? `
                <button class="gallery-nav gallery-nav--prev" aria-label="Previous image" data-gallery="${project.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="gallery-nav gallery-nav--next" aria-label="Next image" data-gallery="${project.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <div class="gallery-dots">
                  ${project.images.map((_, i) => `<button class="gallery-dot ${i === 0 ? 'active' : ''}" data-gallery="${project.id}" data-dot="${i}" aria-label="Go to image ${i + 1}"></button>`).join('')}
                </div>
              ` : ''}
            </div>
            <div class="project__content">
              <div>
                <div class="project__meta">
                  <span class="tag tag--accent">${project.date}</span>
                  <span class="tag">Case Study ${project.number}</span>
                </div>
                
                <h3 class="project__title">${project.title}</h3>
                
                <div class="project__tech">
                  ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                
                <p class="project__desc">${project.description}</p>
                
                <div class="project__section-heading">Key Highlights &amp; Analysis</div>
                <ul class="project__highlights">
                  ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>

              <div class="project__links">
                ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Live Dashboard ↗</a>` : ''}
                ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">View Code ↗</a>` : ''}
                ${(!project.live && !project.github) ? `<span class="tag" style="background-color: var(--color-surface-sunken);">Academic / Analytics Project</span>` : ''}
              </div>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  // 7. Certifications Section (Cards Layout)
  if (data.certifications) {
    const certsGrid = document.querySelector('#certifications-grid');
    if (certsGrid) {
      const sortedCerts = [...data.certifications].sort((a, b) => (b.sortOrder || 0) - (a.sortOrder || 0));
      certsGrid.innerHTML = sortedCerts.map(cert => `
        <div class="certification-card animate-on-scroll">
          <div>
            <div class="certification-card__header">
              <h3 class="certification-card__title">${cert.title}</h3>
            </div>
            <div class="certification-card__issuer">${cert.issuer}</div>
          </div>
          <div class="certification-card__footer">
            <span class="certification-card__date">${cert.date}</span>
            <span class="tag" style="font-size: 0.72rem;">Verified Credential</span>
          </div>
        </div>
      `).join('');
    }
  }

  // 8. Achievements Section
  if (data.achievements) {
    const achievementsContainer = document.querySelector('#achievements-container');
    if (achievementsContainer) {
      achievementsContainer.innerHTML = data.achievements.map(ach => `
        <div class="achievement-card animate-on-scroll">
          <div class="achievement__icon-box">
            <svg class="medal-${ach.medal}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
          </div>
          <div class="achievement__content">
            <h3 class="achievement__title">${ach.title}</h3>
            <div class="achievement__meta">${ach.level} • ${ach.date}</div>
            <p class="achievement__desc">${ach.detail}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 9. Education Section
  if (data.education) {
    const eduTimeline = document.querySelector('#education-timeline');
    if (eduTimeline) {
      eduTimeline.innerHTML = data.education.map(edu => `
        <div class="education-card animate-on-scroll">
          <div>
            <h3 class="education-card__degree">${edu.degree}${edu.field ? ' in ' + edu.field : ''}</h3>
            <div class="education-card__institution">${edu.institution}${edu.location ? ' • ' + edu.location : ''}</div>
            <div class="education-card__period">${edu.period}</div>
          </div>
          <div class="education-card__score-badge">${edu.score}</div>
        </div>
      `).join('');
    }
  }

  // 10. Resume Download Banner
  const resumeDownloadBtn = document.querySelector('#resume-download-btn');
  if (resumeDownloadBtn && data.resume?.path) {
    resumeDownloadBtn.href = data.resume.path;
    resumeDownloadBtn.textContent = `${(data.resume.label || 'DOWNLOAD RESUME').toUpperCase()} 📄`;
  }

  // 11. Contact Info Cards
  if (data.contact) {
    const contactCardsContainer = document.querySelector('#contact-info-cards');
    if (contactCardsContainer) {
      contactCardsContainer.innerHTML = `
        <a href="mailto:${data.contact.email}" class="contact-card">
          <div class="contact-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </div>
          <div class="contact-card__info">
            <div class="contact-card__label">Email</div>
            <div class="contact-card__value">${data.contact.email}</div>
          </div>
        </a>

        <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card">
          <div class="contact-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <div class="contact-card__info">
            <div class="contact-card__label">LinkedIn</div>
            <div class="contact-card__value">in/akshat-tripathi</div>
          </div>
        </a>

        <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" class="contact-card">
          <div class="contact-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <div class="contact-card__info">
            <div class="contact-card__label">GitHub</div>
            <div class="contact-card__value">github.com/akshatVerse</div>
          </div>
        </a>

        <a href="tel:${data.contact.phone.replace(/[^0-9+]/g, '')}" class="contact-card">
          <div class="contact-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div class="contact-card__info">
            <div class="contact-card__label">Phone</div>
            <div class="contact-card__value">${data.contact.phone}</div>
          </div>
        </a>
      `;
    }

    const mailBtn = document.querySelector('#contact-mail-btn');
    if (mailBtn && data.contact.email) {
      mailBtn.href = `mailto:${data.contact.email}?subject=Portfolio%20Inquiry%20-%20Data%20Analytics&body=Hello%20Akshat,%0A%0A`;
    }
  }

  // 12. Footer
  const footerCopy = document.querySelector('.footer__copy');
  if (footerCopy && data.personal) {
    footerCopy.textContent = `© 2026 ${data.personal.fullName}. All rights reserved.`;
  }
}
