const app = documnet.getElementById('root')

const logo = document.createElement('img')
logo.src = logo.png

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


// Creating a request variable and assigning a XMLHttpRequest object
var request = new XMLHttpRequest()

// Opening a connection using a GET request on URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    // Accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
        // Creating a div with a card class
        console.log(movie.title)
        console.log(movie.description)
        })
    } else {
        console.log('error')
    } 
}

// Sending the request!
request.send()