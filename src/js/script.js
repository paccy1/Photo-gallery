document.addEventListener("DOMContentLoaded", function () {
    const knowMoreLinks = document.querySelectorAll(".know-more");
    const overlays = document.querySelectorAll(".overlay");
  
    // Add event listeners to "Know more" links
    knowMoreLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Displaying more information about " + link.previousElementSibling.querySelector("h2").innerText);
      });
    });
  
    // Add event listeners for hover effects on images
    overlays.forEach(overlay => {
      overlay.addEventListener("mouseover", function () {
        this.style.opacity = 1;
      });
  
      overlay.addEventListener("mouseout", function () {
        this.style.opacity = 0;
      });
    });
  });
  