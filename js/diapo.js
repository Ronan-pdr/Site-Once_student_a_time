let compteur = 0
let timer, éléments, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".diapo")
    éléments = document.querySelector(".éléments")
    slides = Array.from(éléments.children)

    slideWidth = diapo.getBoundingClientRect().width 

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
    
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    timer = setInterval(slideNext,5000)

    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    window.addEventListener('resize', () =>{
        slideWidth = diapo.getBoundingClientRect().width
    })
}

function slideNext(){
    compteur++
    if(compteur == slides.length){
        compteur = 0
    }
    let decal = -slideWidth * compteur
    éléments.style.transform = `translateX(${decal}px)`
}

function slidePrev(){
    compteur--
    if(compteur < 0){
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    éléments.style.transform = `translateX(${decal}px)` 
}

function stopTimer(){
    clearInterval(timer)
}

function startTimer(){
    timer = setInterval(slideNext,5000);
}