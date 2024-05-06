
const main = () =>{
    const addButton = document.getElementById('add')
    addButton.addEventListener('click', addInterest)
}

const addInterest =  () => {
    const elemText = document.getElementById('data')
    const text = elemText.value.trim()
    if (text === '') {
        return
    }

    const list = document.querySelector('ol')
    const item = document.createElement('li')
    item.innerText = text
    list.appendChild(item)
    console.log('clicked')

}

window.addEventListener('DOMContentLoaded', main)