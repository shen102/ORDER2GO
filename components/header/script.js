const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);




const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .photo-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
    });
  
}
window.addEventListener("load", initSlider);

 /* imageList.addEventListener("scroll", () => {
        handSlideButtons
    })*/
