const navOpenBtn = document.querySelector('.nav__open-btn')
const navCloseBtn = document.querySelector('.nav__close-btn')
const navWrapper = document.querySelector('.nav__wrapper')


const listSections = document.querySelector('.list__sections')
const sections = document.querySelectorAll('section')

const sectionInput = document.querySelector('.section__input')
const sectionSubmit = document.querySelector('.section__submit')
const addToNav = document.querySelector('#addToNav')
const navLinks = document.querySelector('.nav__links')
const main = document.querySelector('main')

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
const existingSections = new Set();

const createSection = () => {
    const sectionName = sectionInput.value;

    // Sprawdź, czy sekcja o podanej nazwie już istnieje
    if (existingSections.has(sectionName)) {
        alert(`Sekcja o nazwie ${sectionName} już istnieje.`);
        return;
    }

    let newSection = document.createElement('section');
    newSection.classList.add(`${sectionName}__section`);
    main.append(newSection);
    
    let sectionTitle = document.createElement('span');
    sectionTitle.classList.add('title__section');
    sectionTitle.textContent = sectionName;

    newSection.append(sectionTitle);

    if (addToNav.checked) {
        let navLink = document.createElement('a');
        navLink.classList.add('nav__link');
        navLink.textContent = sectionName;
        navLink.href = `#${sectionName}`
        navLinks.append(navLink);
    }

    let elOfList = document.createElement('li');
    elOfList.textContent = sectionName;
    listSections.append(elOfList);

    // Dodaj nazwę do zbioru istniejących sekcji
    existingSections.add(sectionName);
}


for(let i=0; i<sections.length; i++){
    let elOfList = document.createElement('li')
    elOfList.textContent = sections[i].id
    listSections.append(elOfList)
}

navOpenBtn.addEventListener('click', openNav)
navCloseBtn.addEventListener('click', closeNav)
document.addEventListener('click', NavIfOutside)
sectionSubmit.addEventListener('click', createSection)
