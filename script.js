const header = document.querySelector(".header");

window.addEventListener("click", function() {
    header.classList.toggle("sticky", this.window.scroollY > 0)

    let menu = document.querySelector("#menu-icon");
    let navmenu = document.querySelector(".navmenu");

    menu.onclick =() => {
        menu.classList.toggle('bx-x');
        navmenu.classList.toggle('open');
    }
})

console.log(header);