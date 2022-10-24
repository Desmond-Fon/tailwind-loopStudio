const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
        burger.innerHTML = `<img src="images/icon-hamburger.svg" alt="" class="lg:hidden" id="burger">`
    }

    if (burger.getAttribute("src") == "images/icon-hamburger.svg") {
        burger.src = "images/icon-close.svg";
      } else {
        burger.src = "images/icon-hamburger.svg";
      }
})