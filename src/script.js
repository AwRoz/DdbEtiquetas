// --------Contador Component -------- //
function decreaseValue(inputId){
    const input = document.getElementById(inputId)
    if(input.value){
        if(input.value > 0){
            input.value = parseInt(input.value) - 1
        }
    }
}
function increaseValue(inputId){
    const input = document.getElementById(inputId)
    if(!input.value){input.value = 0}
    if(input.value >= 0){
        input.value = parseInt(input.value) + 1
    }
}