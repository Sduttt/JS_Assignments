let quote = document.getElementById("quote")
let author = document.getElementById("author")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '002e2fbbfcmsh84961ce4fd631f8p1a8819jsn576001ea759c',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then((response) => {
    quote.textContent = response.content;
    author.textContent = `- ${response.originator.name}`;
    })
	.catch(err => console.error(err));

function load(){
    location.reload()
}