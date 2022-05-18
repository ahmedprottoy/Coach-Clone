const navToggle = document.getElementById("toggle");
const navOption = document.getElementById("nav--option");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navOption.classList.toggle("active");
  document.body.classList.toggle("stop-scrolling");
});
