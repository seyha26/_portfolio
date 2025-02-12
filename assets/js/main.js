// NAV BAR Function

// function myMenuFunction () {
//     var menuBtn = document.getElementById("myNavMenu");

//     if(menuBtn.className === "nav-menu") {
//         menuBtn.className += " responsive";
//     } else {
//         menuBtn.className = "nav-menu";
//     }
// }

const menuBar = document.getElementById("menu-bar");
const menuBtn = document.getElementById("myNavMenu");

menuBar.addEventListener("click", () => {
  menuBtn.classList.toggle("responsive");
});

// Dark and light mode function 
const htmlAtt = document.querySelector("html");
const switchMode = document.querySelector(".mode-btn");
const switchModeMobile = document.querySelector(".switch-mode");

const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

switchMode.addEventListener('click', () => {
  htmlAtt.classList.toggle("dark-mode")
  // if (htmlAtt.getAttribute("class").includes("dark-mode")) {
  //   moon.style.display = "none";
  //   sun.style.display = "flex"
  // } else {
  //   sun.style.display = "none";
  //   moon.style.display = "flex"
  // }
    moon.classList.toggle('disable');
    sun.classList.toggle('disable')
    dark.classList.toggle("disable");
    light.classList.toggle("disable");

})

switchModeMobile.addEventListener("click", () => {
  htmlAtt.classList.toggle("dark-mode");
  // if (htmlAtt.getAttribute("class").includes("dark-mode")) {
  //   moon.style.display = "none";
  //   sun.style.display = "flex"
  // } else {
  //   sun.style.display = "none";
  //   moon.style.display = "flex";
  // }
  moon.classList.toggle("disable");
  sun.classList.toggle("disable");
  dark.classList.toggle("disable");
  light.classList.toggle("disable");
});


// const moon = document.getElementsByClassName('moon');
// const sun = document.getElementsByClassName('sun');

// const htmlAtt = document.querySelector("html").getAttribute('class');

// const darkMode = () => {
//   if (!htmlAtt.includes("dark-mode") ) {
//     document.querySelector("html").classList.add(darkMode);
//   }
// }


// navbar shadow
window.onscroll = () => headerShadow();

function headerShadow() {
  const header = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    htmlAtt.getAttribute("class").includes("dark-mode")
      ? (header.style.boxShadow = "0 1px 6px rgba(255, 255, 255, 0.1)")
      : (header.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)");
    header.style.height = "70px";
    header.style.lineHeight = "70px";
  } else {
    header.style.boxShadow = "none";
    header.style.height = "90px";
    header.style.lineHeight = "90px";
  }
}

// ================== Typing effect ===================

var typingEffect = new Typed(".typedText", {
  strings: ["a Designer", "a Developer", "a Code lover"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ======#========= Scroll Reveal Animation ==============##
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// ======##===== HOME ============##====
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

// HEADING
sr.reveal(".top-header", {});

// ============ ABOUT INFO =============
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// ============ ABOUT SKILL ===============
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// ============== PROJECT BOX =====================
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectoinId = current.getAttribute("id");
    console.log(current.getAttribute("id"));

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectoinId + "]")
        .classList.add("active-link");
      console.log(current.getAttribute("id"));
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectoinId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
