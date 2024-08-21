//モード切り替え
var mode = document.querySelector("#mode");
mode.onclick = () => {
  /*　昼夜モード　*/
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    mode.className = "fa-solid fa-sun";
  } else {
    mode.className = "fa-solid fa-moon";
  }
};

//ハンバーガーメニュー
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  burger.classList.toggle("toggle");
});

// 保存されたモードを適用する
function applyTheme(theme) {
  if (theme === "light-mode") {
    document.body.classList.add("light-mode");
    mode.className = "fa-solid fa-sun";
  } else {
    document.body.classList.remove("light-mode");
    mode.className = "fa-solid fa-moon";
  }
}

// localStorageに保存されたモードがあれば、それを適用
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// モードを切り替え、選択したモードを保存
mode.onclick = () => {
  document.body.classList.toggle("light-mode");
  let currentTheme = document.body.classList.contains("light-mode")
    ? "light-mode"
    : "dark-mode";
  applyTheme(currentTheme);
  localStorage.setItem("theme", currentTheme);
};
