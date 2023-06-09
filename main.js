// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 70; // Adjust this value to control the scroll offset
      
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
      });
    });
  });
});

