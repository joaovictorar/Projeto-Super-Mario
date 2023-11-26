let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


console.log(formulario)

function cliqueiNoBotao() {
    formulario.style.left = "800px"
    mascara.style.visibility = "visible"

}

function sumirFormulario() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"

}