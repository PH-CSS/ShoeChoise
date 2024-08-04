const modal = document.querySelector(".embrace")
const openL = document.querySelector(".openL")
const openR = document.querySelector(".openR")
const element = document.querySelector("body")


document.addEventListener('keypress', ()=>{
    element.style.overflowY = "auto";
    modal.style.animation = "fadeOut 5.5s forwards"
    openL.style.animation = "fadeOutMoveLeft 2.5s forwards"
    openR.style.animation = "fadeOutMoveRight 2.5s forwards"

})

document.addEventListener('click', ()=>{
    element.style.overflowY = "auto";
    modal.style.animation = "fadeOut 5.5s forwards"
    openL.style.animation = "fadeOutMoveLeft 2.5s forwards"
    openR.style.animation = "fadeOutMoveRight 2.5s forwards"

})