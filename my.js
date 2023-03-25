let imagenes= document.querySelectorAll(".img-galeria")
let imagenesLight= document.querySelector(".agregar-imagen")
let contenedor =document.querySelector(".imagen-light")



imagenes.forEach( imagen => {
    imagen.addEventListener("click", ()=>{
        aparecerimagen(imagen.getAttribute("src"));   
    })
})
contenedor.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedor.classList.toggle("show");
        imagenesLight.classList.toggle("showimage");
    }
})

const aparecerimagen=(imagen)=>{
    imagenesLight.src = imagen;
    contenedor.classList.toggle("show")
    imagenesLight.classList.toggle("showimage")
}


