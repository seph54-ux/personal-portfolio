document.addEventListener("DOMContentLoaded", function () {
  // Lazy Load of all the images
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });

  // Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbarLinks = document.getElementById('navbar-links');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      navbarLinks.classList.toggle('d-none');
    });
  }

  // Dark Mode Toggle and Logo Switch
  const toggle = document.querySelector('#dark-mode-toggle');
  const logoImg = document.getElementById('site-logo');

  function updateLogoBasedOnTheme(isDark) {
    if (logoImg) {
      logoImg.src = isDark
        ? './assets/images/personal_logo/Seph-logo-dark.png'
        : './assets/images/personal_logo/Seph-logo-light.png';
    }
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      updateLogoBasedOnTheme(isDark);
      toggle.innerHTML = `<span class="material-symbols-outlined">
        ${isDark ? 'dark_mode' : 'light_mode'}
      </span>`;
    });
  }

  const isDark = document.body.classList.contains('dark-mode');
  updateLogoBasedOnTheme(isDark);

  // Smooth Scrolling
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    observer.observe(aboutSection);
  }

  // Splide.js for Poster slider
  if (document.getElementById('main-slider-poster')) {
    var mainLogo = new Splide('#main-slider-poster', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: true,
      arrows: true,
      contain: true,
      rewind: true,
      lazyload: 'nearby',
    });

    var thumbLogo = new Splide('#thumbnail-slider-poster', {
      fixedWidth: 100,
      fixedHeight: 64,
      isNavigation: true,
      gap: 10,
      focus: 'center',
      pagination: false,
      cover: true,
      arrows: true,
      rewind: true,
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 40,
        },
      },
    });

    mainLogo.sync(thumbLogo);
    mainLogo.mount();
    thumbLogo.mount();
  }

  // Modal for image and video viewing
  const modal = document.getElementById("imageModal");
  if (modal) {
    document.querySelectorAll('.modal-trigger').forEach(img => {
      img.addEventListener("click", function () {
        openModal(this.src);
      });
    });

    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const videoSrc = card.querySelector('video').getAttribute('data-video-src');
        openModal(videoSrc, true);
      });
    });

    function openModal(src, isVideo = false) {
      modal.style.display = "flex";
      document.body.style.overflow = 'hidden';

      // Clear previous content
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) {
        modal.removeChild(modalContent);
      }

      const closeButton = document.createElement('span');
      closeButton.classList.add('close-modal');
      closeButton.innerHTML = '&times;';
      closeButton.addEventListener('click', closeModalHandler);
      modal.appendChild(closeButton);

      if (isVideo) {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.classList.add('modal-content');
        modal.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-content');
        modal.appendChild(img);
      }
    }

    function closeModalHandler() {
      modal.style.display = "none";
      document.body.style.overflow = '';
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
        video.src = "";
      }
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModalHandler();
      }
    });
  }

  // Splide.js for logo sliders
  if (document.getElementById('logo-slider-1')) {
    new Splide('#logo-slider-1', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      breakpoints: {
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    }).mount();
  }

  if (document.getElementById('logo-slider-2')) {
    new Splide('#logo-slider-2', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      breakpoints: {
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    }).mount();
  }

  if (document.getElementById('obs-overlay-assets')) {
    new Splide('#obs-overlay-assets', {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        992: { perPage: 2 },
        576: { perPage: 1 },
      },
      gap: '1rem',
      padding: '1rem',
      pagination: false,
      arrows: true,
    }).mount();
  }

  if (document.getElementById('obs-overlay-action')) {
    new Splide('#obs-overlay-action', {
      type: 'loop',
      perPage: 3,
      breakpoints: {
        992: { perPage: 2 },
        576: { perPage: 1 },
      },
      gap: '1rem',
      padding: '1rem',
      pagination: false,
      arrows: true,
    }).mount();
  }
});

window.addEventListener("load", () => {
  AOS.init({
    duration: 900,
    once: false,
    easing: "ease-in",
    offset: 100,
  });

  window.addEventListener("scroll", () => {
    AOS.refresh();
  });
});

// Read More for Portfolio Caption
function toggleCaption() {
  const text = document.getElementById("captionText");
  const btn = document.querySelector(".read-more-btn");

  text.classList.toggle("expanded");
  btn.textContent = text.classList.contains("expanded") ? "Show Less" : "Read More";
}

// Contact Form
const form = document.getElementById('contact-form');
if (form) {
  // Show and hide modals
  function showModal(id) {
    document.getElementById(id).style.display = 'flex';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // EmailJS integration with modal feedback
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

    if (!name || !email || !message || !isValidEmail) {
      showModal('errorModal');
      return;
    }

    // Replace with your EmailJS credentials
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this, EMAILJS_PUBLIC_KEY)
      .then(() => {
        showModal('successModal');
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        showModal('errorModal');
      });
  });
}
