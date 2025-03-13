

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");

    function updateAnimationPlayState(state) {
        containers.forEach(container => {
            container.style.animationPlayState = state;
        });
    }

    containers.forEach(container => {
        container.addEventListener("mouseover", function() {
            updateAnimationPlayState('paused');
        });

        container.addEventListener("mouseout", function() {
            updateAnimationPlayState('running');
        });
    });

    // Check for screen width changes
    function checkScreenWidth() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 600) {
            updateAnimationPlayState('running');
        }
    }

    // Call on load and resize
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});