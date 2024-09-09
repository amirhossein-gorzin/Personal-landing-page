const  navToggleIcon = document.querySelector('.nav__toggle-icon')
const  menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioListItems = document.querySelectorAll('.portfolio-list__item')
const changeThemeBtn = document.querySelector(".change-theme")

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})


resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click',function (){
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
        document.querySelector('.resume-content--show').classList.remove('resume-content--show')
        this.classList.add('resume-list__item--active')
        let contentId=this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume-content--show')
    })
})


portfolioListItems.forEach(portfolioListItems => {
    portfolioListItems.addEventListener('click',function (){
        document.querySelector('.portfolio-list__item--active').classList.remove('portfolio-list__item--active')
        document.querySelector('.portfolio__content--show').classList.remove('portfolio__content--show')
        this.classList.add('portfolio-list__item--active')
        let contentId=this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio__content--show')
    })
})

changeThemeBtn.addEventListener("click",function () {
    document.documentElement.classList.toggle("dark-theme")
    if(document.documentElement.classList.contains("dark-theme")){
        this.innerHTML = `<svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>`;
    }
    else{
        this.innerHTML = `<svg fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>`;
    }
})