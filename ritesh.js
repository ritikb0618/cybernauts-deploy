/* =========================================================
   EXPLORE BUTTON LOGIC
========================================================= */

document.getElementById("Explore_Button").addEventListener("click", function () {
  const exploreButton = document.getElementById("Explore_Button");
  const extraProjects = document.querySelectorAll(
    "#extra_project1, #extra_project2"
  );

  const isShowing = exploreButton.classList.toggle("showing");

  extraProjects.forEach(project => {
    project.style.display = isShowing ? "block" : "none";
  });

  const moreIconTemplate = `
    <span class="button__icon-wrapper">
      <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
      </svg>
      <svg class="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
      </svg>
    </span>
  `;

  exploreButton.innerHTML = `${moreIconTemplate} ${
    isShowing ? "Show less" : "Explore All"
  }`;
});

/* =========================================================
   AMAZING – CRAZY – COOL ANIMATION
========================================================= */

const anima = document.getElementById("Animation-a-c-c-a");

function amazing() {
  anima.innerHTML = "Amazing";
}

function crazy() {
  anima.innerHTML = "Crazy";
  setTimeout(cool, 550);
}

function cool() {
  anima.innerHTML = "Cool";
  setTimeout(awesome, 550);
}

function awesome() {
  anima.innerHTML = "Awesome";
  setTimeout(amazingCrazyCool, 550);
}

function amazingCrazyCool() {
  amazing();
  setTimeout(crazy, 550);
}

amazingCrazyCool();

/* =========================================================
   RESPONSIVE FONT & IMAGE SIZE (FIXED)
========================================================= */

/* ---- Store original font sizes ONCE ---- */

const fontElements = document.querySelectorAll(
  ".font-size1, .font-size2, .font-size3, .font-size4, .text"
);

fontElements.forEach(el => {
  if (!el.dataset.baseSize) {
    el.dataset.baseSize = parseFloat(getComputedStyle(el).fontSize);
  }
});

/* ---- Font Resize Logic (NO cumulative scaling) ---- */

function adjustFontSize() {
  const width = window.innerWidth;
  let scaleFactor = 1;

  if (width <= 576) scaleFactor = 0.5;
  else if (width <= 768) scaleFactor = 0.65;
  else if (width <= 992) scaleFactor = 0.8;
  else if (width <= 1200) scaleFactor = 0.9;
  else if (width >= 2500) scaleFactor = 1.4;

  fontElements.forEach(el => {
    const baseSize = parseFloat(el.dataset.baseSize);
    el.style.fontSize = `${baseSize * scaleFactor}px`;
  });
}

/* ---- Image Resize Logic ---- */

function adjustImageSize() {
  const images = document.querySelectorAll(".responsive-image");
  const width = window.innerWidth;

  let imageWidth = "100%";

  if (width <= 576) imageWidth = "50%";
  else if (width <= 768) imageWidth = "60%";
  else if (width <= 992) imageWidth = "70%";
  else if (width <= 1200) imageWidth = "80%";

  images.forEach(img => {
    img.style.width = imageWidth;
  });
}

/* ---- Unified Resize Handler ---- */

function adjustSizes() {
  adjustFontSize();
  adjustImageSize();
}

window.addEventListener("load", adjustSizes);
window.addEventListener("resize", adjustSizes);

/* =========================================================
   END OF FILE
========================================================= */
