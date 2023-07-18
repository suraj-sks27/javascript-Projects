const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/dark and light mode/assets/sun.png";
  } else {
    icon.src = "/dark and light mode/assets/moon.png";
  }
});
