window.addEventListener("scroll", function () {
    var nav = document.querySelector(".topbar");
    nav.classList.toggle("activess", window.scrollY > 90);
})

const click = () => {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("menut");


}