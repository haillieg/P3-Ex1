const frame = document.getElementById("bush-frame");
const title = document.querySelector(".intro h1");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
  const scrollRange = heroSection.offsetHeight - window.innerHeight;
  const progress = Math.min(window.scrollY / scrollRange, 1);

  // frame scales up; opacity uses a power curve so it stays visible longer
  // before fading — lower the exponent (e.g. 0.3) to delay the fade further
  frame.style.transform = `scale(${1 + progress * 3})`;
  frame.style.opacity = Math.pow(1 - progress, 0.4);

  // h1 grows from 0.5x to 1x as the frame disappears
  title.style.transform = `scale(${0.5 + progress * 0.5})`;
});

// Two things to note you can tweak:
//Fade speed — Math.pow(1 - progress, 0.4) — lower the exponent (e.g. 0.3) to make the frame stay opaque even longer before it drops; raise it toward 1 to approach the original linear fade.
//h1 start size — scale(${0.5 + progress * 0.5}) starts the text at half size and grows it to full. Change 0.5 to 0.3 to start it smaller, or 0.7 to start it closer to full size.
