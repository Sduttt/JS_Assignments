function load(){
    location.reload()
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '002e2fbbfcmsh84961ce4fd631f8p1a8819jsn576001ea759c',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then((data) => {
        let joke;
        joke = data.body[0].setup + "\n" + data.body[0].punchline;
        document.getElementById("joke").innerHTML = joke;
    })
	.catch(err => console.error(err));
