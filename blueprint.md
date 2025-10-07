# Project Blueprint

## Overview

This project is a personal portfolio website. It showcases the user's skills, projects, and provides a way for visitors to get in touch.

## File Structure

- `index.html`: Main entry point of the website.
- `style.css`: Main stylesheet.
- `script.js`: Main JavaScript file, which will be refactored into a modular structure.
- `assets/`: Directory for images, fonts, and other assets.
- `blog/`: Directory for blog posts.

## Refactoring Plan

The `script.js` file will be refactored into the following modular structure:

- `js/main.js`: The main entry point for all JavaScript, which will import and initialize all other modules.
- `js/lazy-load.js`: Handles lazy loading of images.
- `js/hamburger-menu.js`: Toggles the hamburger menu on mobile devices.
- `js/dark-mode.js`: Toggles dark mode and switches the logo.
- `js/smooth-scrolling.js`: Handles smooth scrolling to sections.
- `js/aos-init.js`: Initializes the AOS (Animate on Scroll) library.
- `js/splide-init.js`: Initializes all Splide carousels.
- `js/modal.js`: Handles the image and video modals.
- `js/contact-form.js`: Handles the contact form submission with EmailJS.

This modular approach will make the code more organized, easier to debug, and more maintainable.

## Implemented Features

### Tech Stack Scroller Enhancement

**Objective:** To create a visually appealing and seamlessly looping tech stack scroller with adequate spacing between logos.

**Changes Made:**

1.  **`index.html`:**
    *   Applied the `scroller` class to `<div class="skills-container">`.
    *   Applied the `scroller__inner` class to `<div class="skills-wrapper">`.
    *   Removed the manual duplication of skill cards within `index.html`, as the existing JavaScript scroller mechanism now handles content duplication for seamless looping.

2.  **`style.css`:**
    *   Modified the `.skills-container` CSS rule to inherit properties from the `.scroller` class, including `max-width`, `overflow`, and `mask` properties. Removed redundant `display`, `overflow`, and `white-space` properties.
    *   Modified the `.skills-wrapper` CSS rule to inherit properties from the `.scroller__inner` class, including `display`, `gap`, `padding-block`, `width`, `flex-wrap`, and `animation` properties. The `gap` was set to `2rem` for improved spacing.
    *   Modified the `.skill-card` CSS rule to remove `margin`, as spacing is now controlled by the `gap` property of `.skills-wrapper`.
    *   Removed the `@keyframes scrollSkills` rule, as the animation is now handled by the existing `@keyframes scroll` rule applied to `.skills-wrapper`.
3.  **Image Resizing:**
    *   Modified the `.skill-card img` CSS rule to change `width` and `height` from `60px` to `40px`, reducing the size of the tech stack images.