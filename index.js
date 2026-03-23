const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

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

const observer = new IntersectionObserver(
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
  observer.observe(section);
});

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
  typeDelay: 2000,
  startDelay: 500,
  loop: true,
});
