document.addEventListener("DOMContentLoaded", function() {
    // Dropdown Menu Logic
    const moreToggle = document.getElementById("more-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (moreToggle && dropdownMenu) {
        moreToggle.addEventListener("click", function(event) {
            event.preventDefault(); // Prevents page jump
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function(event) {
            if (!moreToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    }

    // Animated Counter for Lab Progress
    const labCount = document.getElementById("lab-count");
    const completedLabs = 2; // Set this to the actual completed labs count

    if (labCount) {
        let count = 0;
        const interval = setInterval(() => {
            if (count < completedLabs) {
                count++;
                labCount.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 500); // Updates every 500ms
    }
    // Prevent reloading Lab 1 if already on html2.html
    const lab1Link = document.querySelector("a[href='html2.html']");
    if (lab1Link) {
        lab1Link.addEventListener("click", function(event) {
            if (window.location.pathname.includes("html2.html")) {
                event.preventDefault(); // Prevents reloading
                console.log("Already on Lab 1 page, no need to reload.");
            }
        });
    }
});