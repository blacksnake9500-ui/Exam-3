const body = document.querySelector("body");
const dark = document.querySelector(".dark");

if (dark) {
  dark.addEventListener("click", () => {
    body.classList.toggle("darkmode");
  });
}
