const startUpBtn = document.querySelector('.startupBtn');
const mainBackground = document.querySelector('.main__background');
const header = document.querySelector('header');
const main = document.querySelector('main');
const mainFormWrapper = document.querySelector('.main__form-wrapper');

const nameInput = document.querySelector('#nameInput');
const lastnameInput = document.querySelector('#lastnameInput');
const emailInput = document.querySelector('#emailInput');
const dateBirthInput = document.querySelector('#dateBirthInput');
const mainImgInput = document.querySelector('#mainImgInput');

// const STORAGE_KEY = 'startupAnimationDone';

// if (!localStorage.getItem(STORAGE_KEY)) {
//     startUp();
  
//     localStorage.setItem(STORAGE_KEY, 'true');

//     const resetTimeInMilliseconds = 300000;
//     setTimeout(() => {
//       localStorage.removeItem(STORAGE_KEY);
//     }, resetTimeInMilliseconds);
//   } else {
//   mainBackground.style.width = '100%';
//   mainBackground.style.transition = 'unset';
//   header.style.height = '20vh';
//   main.style.height = '80vh';
//   mainFormWrapper.style.display = 'flex';
//   mainFormWrapper.style.opacity = '100';
// }

function startUp() {
  mainBackground.style.width = '100%';

  setTimeout(() => {
    mainFormWrapper.style.display = 'flex';

    setTimeout(() => {
      mainFormWrapper.style.opacity = '100';
    }, 300);

  }, 600);
}

const formValidator = () => {
    
}

startUp()