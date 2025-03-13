document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".abouttext h1 span", {
        y: 20,
        duration: 1,
        stagger: 0.2
    });

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1000;

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
});
