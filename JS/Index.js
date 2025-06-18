const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-horizontal");
const body = document.body;

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("overlay-active");
  btn.classList.toggle("open");
});

body.addEventListener("click", (event) => {
  if (body.classList.contains("overlay-active")) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove("active");
      body.classList.remove("overlay-active");
      btn.classList.remove("open");
    }
  }
});
