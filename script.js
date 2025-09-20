//Lazy Load of all the images
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
});

//Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarLinks = document.getElementById('navbar-links');

hamburgerBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('d-none');
});

//Dark Mode Toggle and Logo Switch
const toggle = document.querySelector('#dark-mode-toggle');
const logoImg = document.getElementById('site-logo');

// Function to update the logo image
function updateLogoBasedOnTheme(isDark) {
  logoImg.src = isDark 
    ? './assets/images/personal_logo/Seph-logo-dark.png' 
    : './assets/images/personal_logo/Seph-logo-light.png';
}

// Combined click event for dark mode and logo switching
toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  
  // Update logo based on new theme
  updateLogoBasedOnTheme(isDark);

  // Update the mode icon
  toggle.innerHTML = `<span class="material-symbols-outlined">
    ${isDark ? 'dark_mode' : 'light_mode'}
  </span>`;
});

// Update logo based on existing mode on page load
window.addEventListener('DOMContentLoaded', () => {
  const isDark = document.body.classList.contains('dark-mode');
  updateLogoBasedOnTheme(isDark);
});

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
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
});

// Initialize Splide for logo slider
window.addEventListener("load", () => {
    AOS.init({
        duration: 900, // Smooth animation speed
        once: false, // Animation should happen every time an element comes into view
        easing: "ease-in", // Animation easing style
        offset: 100, // Increased offset for better early triggering
    });

    // Ensure AOS recalculates positions after page load
    AOS.refresh();

    // Force refresh on scroll to ensure animations trigger correctly
    let scrollRef = 0;
    window.addEventListener("scroll", function () {
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
});

// Read More for Portfolio Caption
function toggleCaption() {
    const text = document.getElementById("captionText");
    const btn = document.querySelector(".read-more-btn");

    text.classList.toggle("expanded");
    btn.textContent = text.classList.contains("expanded") ? "Show Less" : "Read More";
  }

// Splide.js for Poster slider
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('main-slider-poster')) {
        var mainLogo = new Splide('#main-slider-poster', {
          type      : 'fade',
          heightRatio: 0.5,
          pagination: true,
          arrows    : true,
          contain     : true,
          rewind  : true,
          lazyload: 'nearby',
        });

        var thumbLogo = new Splide('#thumbnail-slider-poster', {
          fixedWidth  : 100,
          fixedHeight : 64,
          isNavigation: true,
          gap         : 10,
          focus       : 'center',
          pagination  : false,
          cover       : true,
          arrows      : true,
          rewind  : true,
          breakpoints : {
            640: {
              fixedWidth : 66,
              fixedHeight: 40,
            },
          },
        });

        mainLogo.sync(thumbLogo);
        mainLogo.mount();
        thumbLogo.mount();
    }
});

// Modal for image viewing
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    if (modal) {
        const modalImg = document.getElementById("modalImage");
        const closeModal = document.querySelector(".close-modal");

        // When any main slide image is clicked
        document.querySelectorAll('#main-slider-poster .splide__slide img').forEach(img => {
          img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
          });
        });

        // Close modal when clicking the X or outside the image
        closeModal.addEventListener("click", () => {
          modal.style.display = "none";
          document.body.style.overflow = ''; // Restore scroll
        });

        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = '';
          }
        });
    }
  });

// Splide.js for logo sliders
 document.addEventListener('DOMContentLoaded', function () {
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

    // Modal for Logo
    const modal = document.getElementById("logoModal");
    if (modal) {
        const modalImg = document.getElementById("logoModalImg");
        const closeBtn = document.querySelector(".close");

        document.querySelectorAll('.modal-trigger').forEach(img => {
          img.addEventListener('click', function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
          });
        });

        closeBtn.onclick = function () {
          modal.style.display = "none";
        };

        window.onclick = function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = '';
          }
        };
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
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


  //For OBS modal
  document.querySelectorAll('.modal-trigger-obs').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.getElementById("logoModal");
    const modalImg = document.getElementById("logoModalImg");
    modal.style.display = "flex";
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
});

//Modal for Web UI Design
document.querySelectorAll('.modal-trigger-ui').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
});

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


//Modal for video cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
          const videoSrc = card.querySelector('video').getAttribute('data-video-src');
          const modalVideo = document.getElementById('modalVideo');
          if (modalVideo) {
              // Set video source and show modal
              modalVideo.src = videoSrc;
              modalVideo.play();

              const modal = new bootstrap.Modal(document.getElementById('videoModal'));
              modal.show();

              // Stop and reset video on modal close
              document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
                modalVideo.pause();
                modalVideo.currentTime = 0;
                modalVideo.removeAttribute('src');
              });
          }
        });
    });
});
