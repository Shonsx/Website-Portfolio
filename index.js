// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===== UPDATE URL HASH ON SCROLL =====
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        history.replaceState(null, null, "#" + entry.target.id);
      }
    });
  },
  {
    threshold: 0.6,
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ===== TYPING EFFECT =====
var typed = new Typed(".typing-word", {
  strings: [
    "Web Developer",
    "Problem Solver",
    "Frontend Developer",
    "Creative Thinker",
    "Code Lover",
    "Lifelong Learner",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 2000,
  startDelay: 500,
  loop: true,
});

// ===== TIMELINE SCROLL ANIMATION =====
const timelineItems = document.querySelectorAll(".section-container");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.2}s`;
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
        entry.target.style.transitionDelay = "0s"; // reset delay
      }
    });
  },
  {
    threshold: 0.2,
  },
);

timelineItems.forEach((item) => {
  timelineObserver.observe(item);
});

const timeline = document.querySelector(".timeline");

const lineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timeline.classList.add("show-line");
      } else {
        timeline.classList.remove("show-line"); // resets when scrolling up
      }
    });
  },
  {
    threshold: 0.3,
  },
);

lineObserver.observe(timeline);
