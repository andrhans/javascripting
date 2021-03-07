const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// Creating a request variable and assigning a XMLHttpRequest object
var request = new XMLHttpRequest();

// Opening a connection using a GET request on URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    // Accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
        // Creating a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Creating an h1 and setting the text content to the title
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        // Creating a p and setting the text content to the description
        const p = document.createElement('p');
        // Limiting to 300 characters
        movie.description = movie.description.substring(0, 300);
        // Ending with ellipses
        p.textContent = `${movie.description}...`;

        // Appending the cards to the container
        container.appendChild(card);

        // Giving each card a h1 and a p
        card.appendChild(h1);
        card.appendChild(p);
        })
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    } 
}

// Sending the request!
request.send();