// Function to handle scroll effects
function handleScrollEffects() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1000) {
      const targetElement = document.querySelector('.inner-left h2');
      const scrollItems = document.querySelectorAll('.scroll-item');
      const headContainers = document.querySelectorAll('.heads');

      const targetRect = targetElement.getBoundingClientRect();
      const targetPosition = targetRect.top + window.scrollY;

      scrollItems.forEach(item => {
          const itemRect = item.getBoundingClientRect();
          const itemPosition = itemRect.top + window.scrollY;

          if (window.scrollY >= itemPosition - targetRect.height && itemPosition > window.scrollY) {
              item.style.background = 'linear-gradient(45deg, red, orange, pink, blue, purple)';
              item.style.webkitTextStroke = 'transparent';
              item.style.webkitBackgroundClip = 'text';
              item.style.color = 'transparent';
          } else {
              item.style.color = '';
              item.style.background = '';
              item.style.webkitBackgroundClip = '';
              item.style.webkitTextStroke = '1px white';
          }
      });

      headContainers.forEach(container => {
          const containerRect = container.getBoundingClientRect();
          const containerPosition = containerRect.top + window.scrollY;

          if (window.scrollY >= containerPosition - targetRect.height && containerPosition > window.scrollY) {
              container.style.borderColor = 'linear-gradient(to right, #f9c823, #fc506e)';
          } else {
              container.style.borderColor = '';
          }
      });

  } else {
      const years = document.querySelectorAll('.scroll-item');
      const headSections = document.querySelectorAll('.headscontainer');
      const innerleft = document.querySelector('.inner-left');
      const currentyear26 = document.querySelector('#year26');
      currentyear26.style.textAlign = "center";
      currentyear26.style.fontSize = "5rem";

      currentyear26.textContent = "2026";
      const currentyear27 = document.querySelector('#year27');
      currentyear27.textContent = "2027";
      currentyear27.style.textAlign = "center";
      currentyear27.style.fontSize = "5rem";
      const currentyear28 = document.querySelector('#year28');
      currentyear28.textContent = "2028";
      currentyear28.style.textAlign = "center";
      currentyear28.style.fontSize = "5rem";

      innerleft.style.display = 'none';
      years.forEach(year => {
          year.style.display = 'block';
      });

      headSections.forEach(section => {
          section.style.display = 'block';
      });

      const scrollItems = document.querySelectorAll('.scroll-item');
      const headContainers = document.querySelectorAll('.heads');

      scrollItems.forEach(item => {
          item.style.background = '';
          item.style.webkitTextStroke = '';
          item.style.webkitBackgroundClip = '';
          item.style.color = '';
      });

      headContainers.forEach(container => {
          container.style.borderColor = '';
      });
  }
}

// Event listener for scroll and initial load
window.addEventListener('DOMContentLoaded', handleScrollEffects);
window.addEventListener('scroll', handleScrollEffects);
window.addEventListener('resize', handleScrollEffects);

// Debounce resize for performance
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
      handleScrollEffects();
  }, 250);
});

// Club Arrow Click Logic
const clubarrow = document.querySelector(".clubarrow");
const head271name = document.querySelector(".head271name");
const head272name = document.querySelector(".head272name");
const head271image = document.querySelector("#head271image");
const head272image = document.querySelector("#head272image");

let a = 0;

clubarrow.addEventListener("click", () => {
  switch (a) {
      case 0:
          head271name.textContent = "Diya (Co-Lead)";
          head272name.textContent = "Ritik";
          head271image.src = "headBW/diya.png";
          head272image.src = "headBW/ritik.png";
          break;
      case 1:
          head271name.textContent = "Pratham";
          head272name.textContent = "Kunishka";
          head271image.src = "headBW/pratham.png";
          head272image.src = "headBW/kunishka.png";
          break;
      case 2:
          head271name.textContent = "Saanvi";
          head272name.textContent = "Arvind";
          head271image.src = "headBW/saanvi.png";
          head272image.src = "headBW/arvind.png";
          break;
      case 3:
          head271name.textContent = "Yaten (Lead)";
          head272name.textContent = "Baani (Lead)";
          head271image.src = "headBW/yaten.jpg";
          head272image.src = "headBW/baani.png";
          break;
  }

  // Increment a and loop back to 0 after 3
  a = (a + 1) % 4;
});

// Mouseover and Mouseout event listeners for head images
head271image.addEventListener('mouseover', function() {
  switch (a) {
      case 1:
          head271image.src = "headCLR/diya.png";
          break;
      case 2:
          head271image.src = "headCLR/pratham.png";
          break;
      case 3:
          head271image.src = "headCLR/saanvi.png";
          break;
      case 0:
          head271image.src = "headCLR/yaten.jpg"; // Fixed: Corrected the path
          break;
  }
});
head271image.addEventListener('mouseout', function() {
  switch (a) {
      case 1:
          head271image.src = "headBW/diya.png";
          break;
      case 2:
          head271image.src = "headBW/pratham.png";
          break;
      case 3:
          head271image.src = "headBW/saanvi.png";
          break;
      case 0:
          head271image.src = "headBW/yaten.jpg"; // Fixed: Corrected the path
          break;
  }
});

head272image.addEventListener('mouseover', function() {
  switch (a) {
      case 1:
          head272image.src = "headCLR/ritik.png";
          break;
      case 2:
          head272image.src = "headCLR/kunishka.png";
          break;
      case 3:
          head272image.src = "headCLR/arvind.png";
          break;
      case 0:
          head272image.src = "headCLR/baani.png";
          break;
  }
});
head272image.addEventListener('mouseout', function() {
  switch (a) {
      case 1:
          head272image.src = "headbw/ritik.png";
          break;
      case 2:
          head272image.src = "headbw/kunishka.png";
          break;
      case 3:
          head272image.src = "headbw/arvind.png";
          break;
      case 0:
          head272image.src = "headbw/baani.png";
          break;
  }
});

