## Purpose and Capabilities
This portfolio showcases my work in graphic design and UI/UX, and includes a blog and an affiliate product showcase. It's designed to be a professional and visually appealing representation of my skills and experience.

## Implemented Features

### Design and Layout
*   **Responsive Design:** The portfolio is fully responsive and works on all devices.
*   **Dark Mode:** A dark mode toggle is available for user preference.
*   **Modern UI:** The UI is modern and clean, with a focus on user experience.
*   **AOS Animations:** Animations are used to enhance the user experience.
*   **Splide.js Sliders:** Sliders are used to showcase my work in a visually appealing way.

### Content
*   **Portfolio:** A portfolio section showcases my work in graphic design and UI/UX.
*   **Blog:** A blog section features posts about my journey in design and esports.
*   **Showcase:** A showcase section features affiliate products that I recommend.

### Functionality
*   **Contact Form:** A contact form allows users to get in touch with me.
*   **EmailJS Integration:** The contact form is integrated with EmailJS to send emails.
*   **Search and Filter:** The showcase section has a search and filter functionality to help users find products.

## Current Task: Fix Search and Filter

### Plan
1.  **Fix the filter button:** The filter button is not showing the filter options. I will fix this by updating the HTML and JavaScript.
2.  **Fix the search bar:** The search bar is not filtering the products. I will fix this by updating the JavaScript.

### Steps
1.  **Modified `showcase.html`:** I moved the category filter container inside the search container and added a `position-relative` class to the search container. This ensures the category filter is positioned correctly.
2.  **Modified `script.js`:** I added a `DOMContentLoaded` event listener to ensure the script runs after the page is fully loaded. I also added checks to ensure the script only runs on the showcase page, and corrected the logic for showing and hiding the filter and for filtering products.
