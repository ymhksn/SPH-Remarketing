// Your JavaScript code goes here
console.log("Hello, world!");


// Add event listener to scroll links
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    const targetOffsetTop = targetElement.offsetTop - 128;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth",
    });
  });
});

const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
);

const offcanvasElement = document.getElementById("offcanvasResponsive");
const closeOffCanvasLinks = document.querySelectorAll(".closeOffCanvas");

closeOffCanvasLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Close the offcanvas menu and overlay using Bootstrap methods
    const offcanvasElement = document.getElementById("offcanvasResponsive");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();

    const overlayElement = document.querySelector(".offcanvas-overlay");
    overlayElement.classList.remove("show");

    const targetElement = document.querySelector(this.getAttribute("href"));
    const targetOffsetTop = targetElement.offsetTop - 100;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth",
    });
  });
});

//TAB BAR
const tabMenuStyles = document.querySelectorAll(".tabMenuStyle");
const tabContentSettings = document.querySelectorAll(".tabContentSetting");
tabMenuStyles.forEach((tabMenuStyle, index) => {
  tabMenuStyle.addEventListener("click", () => {
    // Remove active class from all tab menu styles
    tabMenuStyles.forEach((style) => style.classList.remove("active"));

    // Add active class to the clicked tab menu style
    tabMenuStyle.classList.add("active");

    // Remove active class from all tab content settings
    tabContentSettings.forEach((setting) => setting.classList.remove("active"));

    // Add active class to the corresponding tab content setting
    const tabContentId = `tabContent${tabMenuStyle.dataset.tab}`;
    document.getElementById(tabContentId).classList.add("active");
  });
});

//TESTIMONI CARD ARROW BUTTON
document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll('.testimoniCardStyle');
  let currentIndex = 0;

  // Function to show the current testimonial
  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active'); // Remove active class from all
      });

      // Add active class to the current testimonial
      testimonials[index].classList.add('active');

      // Scroll the active testimonial into view
      testimonials[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }

  // Show the first testimonial initially
  testimonials[currentIndex].classList.add('active');
  
  // Event listener for the left arrow button
  document.querySelector('.btnIconArrowLeft').addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1; // Loop to the last if at the first
      showTestimonial(currentIndex);
  });

  // Event listener for the right arrow button
  document.querySelector('.btnIconArrowRight').addEventListener('click', function() {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0; // Loop to the first if at the last
      showTestimonial(currentIndex);
  });
});

