const navOpenBtn = document.querySelector('.nav__open-btn')
const navCloseBtn = document.querySelector('.nav__close-btn')
const navWrapper = document.querySelector('.nav__wrapper')

const openNav = () => {
    navWrapper.style.transform = "translateX(0%)"
}
const closeNav = () => {
    navWrapper.style.transform = "translateX(-100%)"
}
const NavIfOutside = (e) => {
    if(!navWrapper.contains(e.target) && !navOpenBtn.contains(e.target)){
        closeNav()
    }
}

navOpenBtn.addEventListener('click', openNav)
navCloseBtn.addEventListener('click', closeNav)
document.addEventListener('click', NavIfOutside)