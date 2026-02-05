// ===============================
// GSAP + ScrollTrigger SETUP
// ===============================
gsap.registerPlugin(ScrollTrigger);

// Improve mobile performance
ScrollTrigger.config({
  ignoreMobileResize: true
});

// ===============================
// HERO (Run ONCE on page load)
// ===============================
gsap.from(".hero-text", {
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-image", {
  x: 80,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

// ===============================
// DEFAULT SCROLL SETTINGS
// ===============================
const scrollDefaults = {
  start: "top 85%",
  toggleActions: "play reverse play reverse"
};

// ===============================
// ABOUT SECTION
// ===============================
gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about-text",
    ...scrollDefaults
  },
  x: -60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

// ===============================
// SKILLS (Tech Stack)
// ===============================
gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills-grid",
    ...scrollDefaults
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.12,
  ease: "power3.out"
});

// ===============================
// PROJECTS
// ===============================
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    ...scrollDefaults
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.12,
  ease: "power3.out"
});

// ===============================
// CONTACT SECTION
// ===============================
gsap.from(".contact-info > *", {
  scrollTrigger: {
    trigger: ".contact-info",
    ...scrollDefaults
  },
  y: 20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  ease: "power3.out"
});

// ===============================
// MOBILE OPTIMIZATION
// ===============================
ScrollTrigger.matchMedia({

  // Disable heavy animations on small screens
  "(max-width: 600px)": function () {
    gsap.set(".skill-card, .project-card", {
      clearProps: "transform,opacity"
    });
  }

});

AOS.init({
    duration: 1000,  // animation duration in ms
    once: true       // animation happens only once
  });

gsap.to("#scramble-text-original", {
  duration: 2, 
  scrambleText: "MERN Stack Developer"
});

// Hand wave animation

gsap.fromTo(
  "#welcome-hand",
  { rotation: 0 },
  {
    rotation: 20,
    duration: 0.2,
    yoyo: true,
    repeat: 5,
    ease: "power1.inOut",
    transformOrigin: "70% 70%",
    repeatDelay: 0.05
  }
);

