// Add custom JavaScript here

function userScroll(){
    const navbar = document.querySelector('.navbar');
    const scrollToTop = document.querySelector('.scroll-to-top-btn')

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark')

        }else{
            navbar.classList.remove('bg-dark')
        }

        if(window.scrollY > 300){
            scrollToTop.classList.remove('invisible')
        }else{
            scrollToTop.classList.add("invisible")
        }
    })
}

window.addEventListener('DOMContentLoaded', userScroll)