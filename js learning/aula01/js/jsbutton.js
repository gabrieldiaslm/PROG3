function buttonClick() {
    console.log('Botão Clicado')
    window.alert("botão clicado")
}
let btn = document.querySelector('button')
btn.addEventListener('click', buttonClick)