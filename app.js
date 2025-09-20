// ===== Copy Text Feature =====
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Copied: " + text);
  }).catch(err => {
    console.error("Copy failed: ", err);
  });
}

// ===== PDF Download Feature =====
function downloadPDF() {
  const element = document.body;
  if (typeof html2pdf === "undefined") {
    alert("⚠️ Please include html2pdf library!");
    return;
  }
  html2pdf().from(element).save("designhub.pdf");
}

// ===== Contact Form Handling + Dark Mode =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const toggle = document.getElementById("darkToggle");

  // ===== Check Saved Mode in localStorage =====
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.textContent = "🌙 Dark Mode On";
  } else {
    if (toggle) toggle.textContent = "☀️ Light Mode On";
  }

  // ===== Form Submission =====
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("📨 Thank you! Your message has been sent.");
      form.reset();
    });
  }

  // ===== Dark Mode Toggle =====
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggle.textContent = "🌙 Dark Mode On";
        localStorage.setItem("theme", "dark");
      } else {
        toggle.textContent = "☀️ Light Mode On";
        localStorage.setItem("theme", "light");
      }
    });
  }
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
