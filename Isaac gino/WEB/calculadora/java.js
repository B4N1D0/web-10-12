let resultado = document.getElementById("resultado");
let correntInput = ""
let correntOperator = ""

function appendNumber(value) {
    correntInput += value 
    resultado.textContent = correntInput
}
