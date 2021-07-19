document.querySelectorAll("section").forEach((section, index)=>{
    section.style.backgroundColor = `rgb(23, 113, 241, ${index*0.15})`
})