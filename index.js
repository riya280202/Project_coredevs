function activateNavigation() {
    const sections = document.querySelectorAll(".section");
    const navContainer = document.createElement("circle");
    const navItems = Array.from(sections).map((section) => {
      return `
                      <div class="circle-item" data-for-section="${section.id}">
                          <a href="#${section.id}" class="circle-link"></a>
                          <span class="circle-label">${section.dataset.label}</span>
                      </div>
                  `;
    });
  
    navContainer.classList.add("circle");
    navContainer.innerHTML = navItems.join("");
  
    const observer = new IntersectionObserver(
      (entries) => {
        document.querySelectorAll(".circle-link").forEach((navLink) => {
          navLink.classList.remove("circle-link-selected");
        });
  
        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
  
        document
          .querySelector(
            `.circle-item[data-for-section="${visibleSection.target.id}"] .circle-link`
          )
          .classList.add("circle-link-selected");
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    document.body.appendChild(navContainer);
  }
  
  activateNavigation();
  