
const inputEmail = document.getElementById("email")
const buttonEmail = document.querySelector(".btn-email")
const infoError = document.querySelector(".infoError")
const imgError = document.querySelector(".iconError")
const infoCorrect = document.querySelector(".infoCorrect")
function validandoInfo() {


    buttonEmail.addEventListener("click", () =>{
    const infoEmail = inputEmail.value
    
    if(infoEmail.includes("@gmail.com")){
        infoCorrect.classList.remove("oculto")
        imgError.classList.add("oculto")
        infoError.classList.add("oculto")
    }else{
        inputEmail.classList.add("erroInput")
        infoError.classList.remove("oculto")
        imgError.classList.remove("oculto")
    }


    setTimeout( () =>{
        infoCorrect.classList.add("oculto")
        infoError.classList.add("oculto")
        imgError.classList.add("oculto")
    } , 2000)
    


})   
}


validandoInfo()
