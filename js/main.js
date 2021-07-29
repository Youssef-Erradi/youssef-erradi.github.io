document.querySelectorAll("section").forEach((section, index)=>{
    section.style.backgroundColor = `rgb(23, 113, 241, ${index*0.15})`
})
const menu      = document.querySelector("#menu")
const nav       = document.querySelector(".nav ul")
const links     = document.querySelectorAll(".nav ul li")
const container = document.querySelector(".container")

menu.addEventListener("click", ()=>{
    container.style = `overflow-y: ${nav.classList.toggle("active")?"hidden":"scroll"};`
    links.forEach((link, index)=>{
        link.style.animation = `linkFade .5s ease forwards ${index/10}s`
    })
    menu.classList.toggle("close")
})

links.forEach((link) => {
    link.addEventListener("click", ()=>{
        menu.classList.remove("close")
        container.style = `overflow-y: scroll;`
        nav.classList.remove("active")
    })
})