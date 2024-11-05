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


//CLOSE MODAL
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

    tabContentSettings.forEach((setting) => {

      setting.classList.remove("active");

      // Remove animation classes

      setting.querySelector('.tabContentLeft').classList.remove('animationslideInLeft');

      setting.querySelector('.tabContentRight').classList.remove('animationslideInRight');

    });


    // Add active class to the corresponding tab content setting

    const tabContentId = `tabContent${tabMenuStyle.dataset.tab}`;

    const activeContent = document.getElementById(tabContentId);

    activeContent.classList.add("active");


    // Add animation classes to the left and right content

    activeContent.querySelector('.tabContentLeft').classList.add('animationslideInLeft');

    activeContent.querySelector('.tabContentRight').classList.add('animationslideInRight');

  });

});



//TESTIMONI CARD ARROW BUTTON
document.addEventListener('DOMContentLoaded', function() {
  const testimoniCards = document.querySelectorAll('.testimoniCardStyle');
  const arrowLeft = document.querySelector('.btnIconArrowLeft');
  const arrowRight = document.querySelector('.btnIconArrowRight');
  const testimoniContainer = document.querySelector('.testimoniAllContainer');
  let currentCardIndex = 0;

  // Function to move the cards
  function moveCards(direction) {
    if (direction === 'left') {
      currentCardIndex--;
      if (currentCardIndex < 0) {
        currentCardIndex = testimoniCards.length - 1;
      }
    } else if (direction === 'right') {
      currentCardIndex++;
      if (currentCardIndex >= testimoniCards.length) {
        currentCardIndex = 0;
      }
    }

    // Calculate the scroll position for the target card
    const targetCard = testimoniCards[currentCardIndex];
    const scrollPosition = targetCard.offsetLeft - (testimoniContainer.offsetWidth / 2) + (targetCard.offsetWidth / 2);

    // Scroll smoothly to the target card
    testimoniContainer.scroll({
      left: scrollPosition,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }

  // Event listeners for the arrows
  arrowLeft.addEventListener('click', () => moveCards('left'));
  arrowRight.addEventListener('click', () => moveCards('right'));
});



//PARALLAX CONTROL
window.addEventListener('scroll', function() {
  const parallaxBlue = document.querySelector('.introParallaxBlue');
  const parallaxRed = document.querySelector('.introParallaxRed');
  const parallaxYellow = document.querySelector('.introParallaxYellow');
  const scrolled = window.scrollY; // Get the current scroll position

  // Adjust the background position based on scroll
  parallaxRed.style.transform = 'translateY(' + (scrolled * 0.1) + 'px)'; // Adjust the multiplier for speed
  parallaxYellow.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)'; 

});


//PREVENT SCROLL TO VIEW AT FORM
window.onload = function() {
  // Scroll to the top of the page
  window.scrollTo(0, 0);

  // Optionally, remove focus from the form fields
  const formFields = document.querySelectorAll('#form-container input, #form-container textarea, #form-container select');
  formFields.forEach(field => {
      field.blur(); // Remove focus from each field
  });
};


//ANIMATION FOR MAIN BANNER TEXT
// window.onload = function() {
//   const content = document.querySelector('.sect1Container'); 
//   content.classList.add('visible'); 
// };

document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.sect1Container'); 
  setTimeout(function() {
      content.classList.add('visible'); 
  }, 1000); // Delay of 1 second
});