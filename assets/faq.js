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

 
 
 
 document.addEventListener("DOMContentLoaded", () => {

  const faqLinks = document.querySelectorAll(".faq_links a"); // desktop
  const faqSections = document.querySelectorAll(".custom-accordion");

  const dropdownBtn = document.querySelector(".faq_dropdown_btn");
  const dropdownList = document.querySelector(".faq_dropdown_list");
  const dropdownItems = document.querySelectorAll(".faq_dropdown_list li");
  const dropdownLabel = document.querySelector(".faq_dropdown_label");

  /* -------------------------
     DESKTOP LEFT MENU LINKS
  ---------------------------*/
  faqLinks.forEach(link => {
    link.addEventListener("click", () => {
      handleFaqSwitch(link.getAttribute("data-val"), link.textContent);
    });
  });

  /* -------------------------
      MOBILE DROPDOWN BUTTON
  ---------------------------*/
  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", () => {
      dropdownList.style.display =
        dropdownList.style.display === "block" ? "none" : "block";
    });
  }

  /* -------------------------
       MOBILE DROPDOWN ITEMS
  ---------------------------*/
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      const value = item.getAttribute("data-val");
      const text = item.textContent;

      // Update visible label
      dropdownLabel.textContent = text;

      // Close dropdown
      dropdownList.style.display = "none";

      // Switch FAQ section
      handleFaqSwitch(value, text);
    });
  });

  /* -------------------------
        FUNCTION: Switch Section
  ---------------------------*/
  function handleFaqSwitch(targetVal, labelText = null) {
    // Update desktop active state
    faqLinks.forEach(l => l.classList.remove("active"));
    const matchingLink = document.querySelector(`.faq_links a[data-val="${targetVal}"]`);
    if (matchingLink) matchingLink.classList.add("active");

    // Show proper section
    faqSections.forEach(section => {
      section.style.display = section.id === targetVal ? "block" : "none";
    });
  }

  /* -------------------------
        SHOW FIRST SECTION BY DEFAULT
  ---------------------------*/
  if (faqSections.length > 0) {
    const firstSection = faqSections[0];
    firstSection.style.display = "block";
  }
});


