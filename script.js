const dropdownContainer = document.querySelector(".nav_logo");
const menuTitle = document.querySelector(".menu_logo");
const dropdownMenu = document.querySelector(".menu_nav");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})