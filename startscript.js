// $(document).ready(function(){
//     $(".startupBtn").click(function(){
//         $("header").animate({
//             height: '140px'
//         })
//         $(".header__title").animate({
//             left: '10px'
//         });

//     })
// })

const startUpBtn = document.querySelector('.startupBtn')
const mainBackground = document.querySelector('.main__background')
const header = document.querySelector('header')
const main = document.querySelector('main')

const mainFormWrapper = document.querySelector('.main__form-wrapper')

const startUp = () => {
    mainBackground.style.width = '100%'
    startUpBtn.style.opacity = '0'

    setTimeout(() =>{
        startUpBtn.style.display = 'none'
    }, 500)

    setTimeout(() => {
        header.style.height = '20vh'
        main.style.height = '80vh'
        mainFormWrapper.style.display = 'flex'

        setTimeout(() => {
            mainFormWrapper.style.opacity = '100'
        }, 500);

    }, 1000);
}

startUpBtn.addEventListener('click', startUp)