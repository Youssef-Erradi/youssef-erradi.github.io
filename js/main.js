const menu      = document.querySelector("#menu")
const nav       = document.querySelector(".nav ul")
const links     = document.querySelectorAll(".nav ul li")
const container = document.querySelector(".container")

menu.addEventListener("click", ()=>{
    const isNavActive = nav.classList.toggle("active")
    container.style = `overflow-y: ${isNavActive?"hidden":"scroll"};`
    // links.forEach((link, index)=>{
    //     link.style.animation = `linkFade .5s ease forwards  ${index/10}s`
    // })
    menu.classList.toggle("close")
})

links.forEach((link) => {
    link.addEventListener("click", ()=>{
        menu.classList.remove("close")
        container.style = `overflow-y: scroll;`
        nav.classList.remove("active")
    })
})