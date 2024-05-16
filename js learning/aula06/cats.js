const url = 'https://api.thecatapi.com/v1';
const apiKey = "DEMO_API_KEY"


const main = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', `${url/breeds}`)
    xhr.setRequestHeader('X-Api-Key', apiKey)
    xhr.responseType = 'json'
    xhr.onload = () => {
        if (xhr.status != 200) {
            return;
        }

        
        // xhr.response
    }
    xhr.send()
}
window.addEventListener('DOMContentLoaded', main)
