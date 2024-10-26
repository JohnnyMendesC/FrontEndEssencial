function somar(){
    var numero1 = parseInt(document.getElementById("num1").value)
    var numero2 = parseInt(document.getElementById("num2").value)
    var resultF = numero1+numero2
    document.getElementById("resultado").innerHTML = `resultado ${resultF}`
}