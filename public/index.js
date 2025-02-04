import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 9,
  curvePoints: 20,
  curveLerp: 1,
  radius1: 1,
  radius2: 5,
  velocityTreshold: 10,
  sleepRadiusY: 100,
  sleepRadiusX: 100,
  sleepTimeCoefX: 0.00025,
  sleepTimeCoefY: 0.001,
});

// ********************prefooter***********************
var elem = document.querySelector(".ani");
var chotu = document.querySelector(".chotu");

elem.addEventListener("mouseenter", function () {
  gsap.to(chotu, {
    duration: 0.4,
    scale: 1,
    opacity: 1,
    ease: "power2.out",
  });
});

elem.addEventListener("mouseleave", function () {
  gsap.to(chotu, {
    duration: 0.4,
    scale: 0,
    opacity: 0,
    ease: "power2.inOut",
  });
});

elem.addEventListener("mousemove", function (event) {
  var rect = elem.getBoundingClientRect();

  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  gsap.to(chotu, {
    duration: 0.05,
    x: x,
    y: y,
    ease: "power2.out",
  });
});

const inputField = document.getElementById("query-input");
const placeholder = document.getElementById("query-placeholder");

inputField.addEventListener("focus", () => {
  placeholder.style.top = "-1.5vw";
  placeholder.style.fontSize = "0.9vw";
  placeholder.style.color = "#ffffff";
});

inputField.addEventListener("blur", () => {
  if (inputField.value === "") {
    placeholder.style.top = "0.55vw";
    placeholder.style.fontSize = "1vw";
    placeholder.style.color = "rgba(255, 255, 255, 0.5)";
  }
});
// ****************************about us**********************************
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".abouttext h1 span", {
    y: 20,
    duration: 1,
    stagger: 0.2,
  });

  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1000;
  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue + "+";
            if (startValue == endValue) {
              clearInterval(counter);
            }
          }, duration);
        });
        observer.unobserve(entry.target); // Stop observing once the animation has played
      }
    });
  }, observerOptions);

  let target = document.querySelector(".about");
  observer.observe(target);
});

// *****************projects***************************//
// Explore Button
document
  .getElementById("Explore_Button")
  .addEventListener("click", function () {
    const exploreButton = document.getElementById("Explore_Button");
    const extraProjects = document.querySelectorAll(
      "#extra_project1, #extra_project2"
    );
    const isShowing = exploreButton.classList.toggle("showing");

    extraProjects.forEach((project) => {
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

/*----------------------------------------------------------------------------------------------------------------------------- */

/*----------------------------------------------------------------------------------------------------------------------------- */
/* Animation of Amazing-Crazy-Cool */

function amazingCrazyCool() {
  // Recursive call for continuous loop
  amazing();
  setTimeout(crazy, 550); // Delay next function call by 1 second
}

function amazing() {
  document.getElementById("Animation-a-c-c-a").innerHTML = "Amazing";
}

function crazy() {
  document.getElementById("Animation-a-c-c-a").innerHTML = "Crazy";
  setTimeout(cool, 550); // Delay next function call by 1 second
}

function cool() {
  document.getElementById("Animation-a-c-c-a").innerHTML = "Cool";
  setTimeout(awesome, 550); // Delay next function call by 1 second
}

function awesome() {
  document.getElementById("Animation-a-c-c-a").innerHTML = "Awesome";
  setTimeout(amazingCrazyCool, 550); // Call back to start over
}

// Call the animation function once to initiate the loop
amazingCrazyCool();

/* Animation of Amazing-Crazy-Cool */
/*----------------------------------------------------------------------------------------------------------------------------- */

// // Responsive text sizefunction adjustFontSize() {
const width = window.innerWidth;
let scaleFactor;

console.log(width);

if (width <= 755) {
  scaleFactor = "0.24";
} else if (width <= 782) {
  scaleFactor = "0.29";
} else if (width <= 835) {
  scaleFactor = "0.34";
} else if (width <= 885) {
  scaleFactor = "0.39";
} else if (width <= 875) {
  scaleFactor = "0.44";
} else if (width <= 912) {
  scaleFactor = "0.45";
} else if (width <= 945) {
  scaleFactor = "0.49";
} else if (width <= 982) {
  scaleFactor = "0.54";
} else if (width <= 992) {
  scaleFactor = "0.59";
} else if (width <= 1149) {
  scaleFactor = "0.64";
} else if (width <= 1070) {
  scaleFactor = "0.69";
} else if (width <= 1130) {
  scaleFactor = "0.74";
} else if (width <= 1200) {
  scaleFactor = "0.79";
} else if (width >= 2500) {
  scaleFactor = "1.49";
} else {
  scaleFactor = "1";
}
const elements = [
  ...document.querySelectorAll(".font-size1"),
  ...document.querySelectorAll(".font-size2"),
  ...document.querySelectorAll(".font-size3"),
  ...document.querySelectorAll(".font-size4"),
  ...document.querySelectorAll(".text"),
];

elements.forEach((element) => {
  const baseFontSize = parseFloat(getComputedStyle(element).fontSize);
  element.style.fontSize = `${baseFontSize * scaleFactor}px`;
});

console.log(scaleFactor);

function adjustImageSize() {
  const images = document.querySelectorAll(".responsive-image");
  const width = window.innerWidth;
  let imageWidth;

  if (width <= 576) {
    imageWidth = "50%";
  } else if (width <= 768) {
    imageWidth = "60%";
  } else if (width <= 992) {
    imageWidth = "70%";
  } else if (width <= 1200) {
    imageWidth = "80%";
  } else {
    imageWidth = "100%";
  }

  images.forEach((image) => {
    image.style.width = imageWidth;
  });
}

function adjustSizes() {
  adjustFontSize();
  adjustImageSize();
}

window.addEventListener("load", adjustSizes);
window.addEventListener("resize", adjustSizes);
window.addEventListener("reload", adjustSizes);

//--------------------------------------------------------------------------------------------------------------------------------

//Flipping the image of faculty when hovered
