const visionheading1 = document.querySelector("#visionheading1");
const visionheading2 = document.querySelector("#visionheading2");
const visiontext = document.querySelector("#visiontext");

const visionarrows = document.querySelectorAll('.visionarrow'); // Select all elements with class 'visionarrow'

const missionheading1 = 'MISSION';
const missionheading2 = 'Mission';
const missionText = 'Our mission at CYBERNAUTS is to empower the next generation of digital leaders by providing them with the tools, knowledge, and opportunities to develop cutting-edge technical skills, fostering innovation and driving positive change in the world';
const visionText='Our vision at CYBERNAUTS is to cultivate a community of visionary digital leaders, inspiring innovation and driving positive global impact through cutting-edge technology. We envision a future where every member is empowered with comprehensive skills and knowledge, enabling them to pioneer transformative solutions that shape a better world';
let isVision = true; // Initially set to true because Vision is displayed

visionarrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        if (isVision) {
            visionheading1.textContent = missionheading1;
            visionheading2.textContent = missionheading2;
            visiontext.textContent = missionText;
            isVision = false; // Update isVision to false when switching to Mission
        } else {
            visionheading1.textContent = 'VISION';
            visionheading2.textContent = 'Vision';
            visiontext.textContent = visionText;
            isVision = true; // Update isVision to true when switching back to Vision
        }
    });
});
