// Explore Button
document.getElementById("Explore_Button").addEventListener("click", function() {
  const exploreButton = document.getElementById("Explore_Button");
  const extraProjects = document.querySelectorAll("#extra_project1, #extra_project2");
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

  exploreButton.innerHTML = `${moreIconTemplate} ${isShowing ? "Show less" : "Explore All"}`;
});

/*----------------------------------------------------------------------------------------------------------------------------- */














/*----------------------------------------------------------------------------------------------------------------------------- */
/* Animation of Amazing-Crazy-Cool */

function amazingCrazyCool() { // Recursive call for continuous loop
  amazing();
  setTimeout(crazy, 550); // Delay next function call by 1 second
}

function amazing() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Amazing';
}

function crazy() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Crazy';
  setTimeout(cool, 550); // Delay next function call by 1 second
}

function cool() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Cool';
  setTimeout(awesome, 550); // Delay next function call by 1 second
}

function awesome() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Awesome';
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
      scaleFactor = '0.24';
  } else if (width <= 782) {
      scaleFactor = '0.29';
  } 
  else if (width <= 835) {
    scaleFactor = '0.34';
}
else if (width <= 885) {
  scaleFactor = '0.39';
} 
  else if (width <= 875) {
    scaleFactor = '0.44';
}else if (width <= 912) {
  scaleFactor = '0.45';
}
else if (width <= 945) {
  scaleFactor = '0.49';
}
else if (width <= 982) {
  scaleFactor = '0.54';
}
else if (width <= 992) {
      scaleFactor = '0.59';
  }
  else if (width <= 1149) {
    scaleFactor = '0.64';
  }
  else if (width <= 1070) {
    scaleFactor = '0.69';
  }
  else if (width <= 1130) {
    scaleFactor = '0.74';
  } else if (width <= 1200) {
      scaleFactor = '0.79';
  }
  else if (width >=2500){
     scaleFactor='1.49'
  } else {
      scaleFactor = '1';
  }
    const elements = [
        ...document.querySelectorAll('.font-size1'),
        ...document.querySelectorAll('.font-size2'),
        ...document.querySelectorAll('.font-size3'),
        ...document.querySelectorAll('.font-size4'),
        ...document.querySelectorAll('.text')
    ];

    elements.forEach(element => {
        const baseFontSize = parseFloat(getComputedStyle(element).fontSize);
        element.style.fontSize = `${baseFontSize * scaleFactor}px`;
    });

    console.log(scaleFactor);


function adjustImageSize() {
    const images = document.querySelectorAll('.responsive-image');
    const width = window.innerWidth;
    let imageWidth;

    if (width <= 576) {
        imageWidth = '50%';
    } else if (width <= 768) {
        imageWidth = '60%';
    } else if (width <= 992) {
        imageWidth = '70%';
    } else if (width <= 1200) {
        imageWidth = '80%';
    } else {
        imageWidth = '100%';
    }

    images.forEach(image => {
        image.style.width = imageWidth;
    });
}

function adjustSizes() {
    adjustFontSize();
    adjustImageSize();
}

window.addEventListener('load', adjustSizes);
window.addEventListener('resize', adjustSizes);
window.addEventListener('reload', adjustSizes);

//--------------------------------------------------------------------------------------------------------------------------------




//Flipping the image of faculty when hovered




