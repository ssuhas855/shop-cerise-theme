document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");
  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-item.active");
      const parent = header.closest(".accordion-item");
      if (openItem && openItem !== parent) {
        openItem.classList.remove("active");
        openItem.querySelector(".accordion-content").style.maxHeight = null;
        openItem.querySelector(".accordion-icon").textContent = "+";
      }
      parent.classList.toggle("active");
      const content = header.nextElementSibling;
      if (parent.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        header.querySelector(".accordion-icon").textContent = "–";
      } else {
        content.style.maxHeight = null;
        header.querySelector(".accordion-icon").textContent = "+";
      }
    });
  });
});

 
 
 
 // Handle left menu link clicks
document.addEventListener("DOMContentLoaded", () => {
 
  const faqLinks = document.querySelectorAll(".faq_links a");
  const faqSections = document.querySelectorAll(".custom-accordion");

  faqLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Remove 'active' class from all links
      faqLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Get data attribute from clicked link
      const targetVal = link.getAttribute("data-val");

      // Hide all FAQ sections
      faqSections.forEach(section => {
        section.style.display = "none";
      });

      // Show only the matching section
      const targetSection = document.getElementById(targetVal);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });

  // Show the first section by default
  faqSections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});

