/*  
Variáveis
    3 jeitos de criar as variáveis

    É um  espaço de memória que você reserva
        e pode guardar o que quiser la dentro

     3 jeitos de criar uma variável
      -var / jeito antigo - NÂO USE
        -let -> VOCÊ pode alterar o valor depois   
        -cost -> constante
*/

/* 
    Funções
    Um trecho de código que, só é executado
    quando é chamado
*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarForm(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function esconderForm(){
  form.style.left = "-330px"
  form.style.transform = "translateX(0)"
  mascara.style.visibility = "hidden"
}

