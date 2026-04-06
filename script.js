// Initialize Tailwind Config (Alternative if not in HTML)
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        medical: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          500: "#14b8a6", // Teal
          600: "#0d9488",
          700: "#0f766e",
        },
        blood: {
          50: "#fff1f2",
          500: "#f43f5e", // Rose
          600: "#e11d48",
        },
      },
    },
  },
};

// Initialize Icons
lucide.createIcons();

// Function to handle tab switching
function showSection(sectionId) {
  // 1. Hide all sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => {
    sec.classList.add("opacity-0", "translate-y-4"); // fade out & slide down

    // Wait for animation to finish before hiding display
    setTimeout(() => {
      sec.classList.add("hidden");
    }, 150);
  });

  // 2. Reset all nav buttons styling
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    btn.classList.remove(
      "bg-blood-50",
      "text-blood-600",
      "ring-1",
      "ring-blood-200",
    );
    btn.classList.add("text-slate-500");
  });

  // 3. Show target section and highlight active button
  setTimeout(() => {
    const targetSec = document.getElementById(sectionId);
    if (targetSec) {
      targetSec.classList.remove("hidden");
      // Small delay to allow display:block to apply before animating opacity
      setTimeout(() => {
        targetSec.classList.remove("opacity-0", "translate-y-4");
      }, 20);
    }

    const activeBtn = document.querySelector(
      `.nav-btn[data-target="${sectionId}"]`,
    );
    if (activeBtn) {
      activeBtn.classList.remove("text-slate-500");
      activeBtn.classList.add(
        "bg-blood-50",
        "text-blood-600",
        "ring-1",
        "ring-blood-200",
      );

      // Scroll active button into view on mobile
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, 150);
}
