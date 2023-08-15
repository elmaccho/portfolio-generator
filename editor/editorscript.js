const navOpenBtn = document.querySelector('.nav__open-btn')
const navCloseBtn = document.querySelector('.nav__close-btn')
const navWrapper = document.querySelector('.nav__wrapper')

const openNav = () => {
    navWrapper.classList.add('nav__open')
    navWrapper.classList.remove('nav__close')
    console.log('open');
}
const closeNav = () => {
    navWrapper.classList.add('nav__close')
    navWrapper.classList.remove('nav__open')
    console.log('close');
}
const NavIfOutside = (e) => {
    if(!navWrapper.contains(e.target) && !navOpenBtn.contains(e.target)){
        closeNav()
    }
}

navOpenBtn.addEventListener('click', openNav)
navCloseBtn.addEventListener('click', closeNav)
document.addEventListener('click', NavIfOutside)