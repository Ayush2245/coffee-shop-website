document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Back to top button functionality
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑";
  backToTop.style.cssText = `
        position: fixed; bottom: 20px; right: 20px;
        padding: 10px 15px; font-size: 20px; border: none;
        background-color: #c17f59; color: white;
        cursor: pointer; display: none; border-radius: 50%;
    `;
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Contact form alert
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
    });
  }
});

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const darkModeStyles = document.createElement("style");
darkModeStyles.innerText = `
  .dark-mode {
      background-color: #1a1a1a;
      color: white;
  }
  .dark-mode header {
      background-color: #111;
  }
  .dark-mode #menu, .dark-mode #contact, .dark-mode #offers, .dark-mode #reviews {
      background-color: #222;
  }
`;
document.head.appendChild(darkModeStyles);
const sections = document.querySelectorAll("section");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections(); // Run on page load
