/* ============================================================
   PROJECTS CONTROLLER
   Clean, subtle case-study interactions + image gallery slider
   ============================================================ */

export function initProjects() {
  const projectStudies = document.querySelectorAll('.project-case-study');
  if (!projectStudies.length) return;

  projectStudies.forEach(study => {
    study.addEventListener('mouseenter', () => {
      study.classList.add('project-study--hover');
    });
    
    study.addEventListener('mouseleave', () => {
      study.classList.remove('project-study--hover');
    });
  });

  // --- Image Gallery Slider ---
  initGalleries();
}

function initGalleries() {
  const galleries = document.querySelectorAll('.project__gallery[data-gallery-id]');
  galleries.forEach(gallery => {
    const galleryId = gallery.dataset.galleryId;
    const images = gallery.querySelectorAll('.project-card__image');
    const dots = gallery.querySelectorAll('.gallery-dot');
    const prevBtn = gallery.querySelector('.gallery-nav--prev');
    const nextBtn = gallery.querySelector('.gallery-nav--next');

    if (images.length <= 1) return;

    let currentIndex = 0;

    function goToSlide(index) {
      // Clamp index
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;

      images.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      images[index].classList.add('active');
      dots[index].classList.add('active');

      // Slide the track
      const track = gallery.querySelector('.project__gallery-track');
      if (track) {
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      currentIndex = index;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const dotIndex = parseInt(dot.dataset.dot);
        goToSlide(dotIndex);
      });
    });
  });
}
