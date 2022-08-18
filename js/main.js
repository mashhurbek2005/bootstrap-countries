var elThemeBtn = document.querySelector(".js-dark-mode-btn");
var elBody = document.querySelector(".body");

elThemeBtn.addEventListener("click", function(){
    elBody.classList.toggle("body-active")
})