// Toggle
const navbarMain = document.querySelector(".navbar-main");

//Menu
document.querySelector("#pilihan").onclick = () => {
  navbarMain.classList.toggle("active");
};

//keluar nav tanpa click menu
const menu = document.querySelector("#pilihan");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarMain.contains(e.target)) {
    navbarMain.classList.remove("active");
  }
});
