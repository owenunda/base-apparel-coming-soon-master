
const inputEmail = document.getElementById("email")
const buttonEmail = document.querySelector(".btn-email")
const infoError = document.querySelector(".infoError")
const imgError = document.querySelector(".iconError")

function validandoInfo() {


    buttonEmail.addEventListener("click", () =>{
    const infoEmail = inputEmail.value
    
    if(infoEmail.includes("@gmail.com")){
        console.log("correcto")
    }else{
        inputEmail.classList.add("erroInput")
        infoError.classList.remove("oculto")
        imgError.classList.remove("oculto")
}





})    
}


validandoInfo()
