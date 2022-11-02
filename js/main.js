let burgerBtn = document.querySelector('.burger')
let menuBurger = document.querySelector('.menu')
let closeBtn = document.querySelector('.close')

let tl = gsap.timeline();

tl.from('.hero__title', { duration: 2, y: 80, opacity: 0 })
tl.from('.hero__btn', { duration: 2, y: 80, ease: "power2.out", opacity: 0 }, "-=2")
tl.from('.hero__descr', { duration: 1.5, opacity: 0 }, "-=0.4")
tl.from('.photos-wrap-img1', { duration: 1, opacity: 0 }, "-=1")
tl.from('.photos-wrap-img2', { duration: 1, opacity: 0 }, "-=0.5")
tl.from('.photos-wrap-img3', { duration: 1, opacity: 0 }, "-=0.5")

let ml = gsap.timeline({paused: true});
ml.from('.menu__top', { duration: 1, opacity: 0, y: -70, })
ml.from('.menu', { duration: 1, opacity: 0, y: 100, }, "-=1")
ml.from('.menu__nav', { duration: 1, opacity: 0, y: 100, }, "-=0.5")
ml.from('.social', { duration: 1, opacity: 0, y: 30, }, "-=0.6")
ml.from('.menu__right', { duration: 1, opacity: 0, y: 50, }, "-=0.8");

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('menu--open');
  ml.play()
})

closeBtn.addEventListener('click', () => {

  setTimeout(function () {
    menuBurger.classList.remove('menu--open');
}, 2000);

  ml.reverse()

})