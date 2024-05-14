window.addEventListener('DOMContentLoaded', () =>{
    const zipcode = document.getElementById('zipcode')
    zipcode.addEventListener('keydown', zipcodeDown)
    zipcode.addEventListener('change', zipcodeChanged)
})

const zipcodeDown = (event) => {
    console.log(event.key)
    if (event.key <'0' || event.key > '9'){
        event.preventDefault()
        return
    }
}

const zipcodeChanged = (event) => {
    const zipcode = event.target.value
    if(zipcode.length != 8) {
        return
    }
    const xhr = new XMLHttpRequest()
// ARRUMAR QUANDO CHEGAR
    xhr.open('get', 'https://viacep.com.br/ws/${zipcode}/json/', true)
    xhr.responseType = 'json'
    xhr.onload = zipcodeData
    xhr.send()

}

const zipcodeData = (data) => {
    console.log(data)
}