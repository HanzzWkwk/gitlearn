const btn = document.getElementById("click");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    btn.innerHTML = "Kembali";
    text.innerHTML = "5191T";
  } else {
    btn.innerHTML = "Klik Gue";
    text.innerHTML = "LocoVerse Website";
  }
});
