const btn = document.getElementById('button')
btn.addEventListener("click", valid);
btn.addEventListener("click", dallasItalian$);
btn.addEventListener("click", dallasItalian$$);
btn.addEventListener("click", dallasItalian$$$);
btn.addEventListener("click", dallasItalian$$$$);

// Taking Input from Radio Buttons 
function valid() {
    const italian = document.getElementById('italian');
    const american = document.getElementById('american');
    const mexican = document.getElementById('mexican');
    const seafood = document.getElementById('seafood');
    const asian = document.getElementById('asian');


    if(italian.checked === true) {
        null
    } else if(american.checked === true) {
        null
    } else if(mexican.checked === true) {
        null
    } else if(seafood.checked === true) {
        null
    } else if(asian.checked === true) {
        null
    } else {
        alert('Please choose a cuisine!');
    }

    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');

    if(one.checked === true) {
        null
    } else if(two.checked === true) {
        null
    } else if(three.checked === true) {
        null
    } else if(four.checked === true) {
        null
    } else {
        alert('Please choose a price range!')
    }

    const dallas = document.getElementById('dallas');
    const fortWorth = document.getElementById('fort-worth');

    if(dallas.checked === true) {
        null
    } else if(fortWorth.checked === true) {
        null
    } else {
        alert('Please choose a location!')
    }
};

// checking if dallas, italian, how many $ were checked, and randomizing a restaurant
function dallasItalian$() { 
    const italian = document.getElementById('italian');  // add more info to results
    const one = document.getElementById('one');            // ex. address & hours
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && italian.checked && one.checked === true) {
        alert("Go to Roma's Pizza & Italian!")
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked && one.checked === true) {
        alert('Go to Italia Express!') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked && one.checked === true) {
        alert("Go to Franki's Pizza & Pasta!")
    } else if(randomNumber === 4 && dallas.checked === true && italian.checked && one.checked === true) {
        alert('Go to Bellatrino Pizzeria!')
    } else {
        null
    }
};

function dallasItalian$$() { 
    const italian = document.getElementById('italian');
    const two = document.getElementById('two');               
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)
    
    if (randomNumber === 1 && dallas.checked === true && italian.checked === true && two.checked) {
        alert('Go to Nonna!')
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('Go to North Italia!') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('Go to Taverna!') 
    } else if (randomNumber === 4 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('Go to Amore Italian Restaurant!')
    } else {
        null
    }
};

function dallasItalian$$$() {
    const italian = document.getElementById('italian'); 
    const three = document.getElementById('three');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 1 && dallas.checked === true && italian.checked === true && three.checked === true) {
        alert('Go to Bugatti Ristorante!')
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && three.checked === true) {
        alert('Go to Lucia!')
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && three.checked === true) {
        alert("Go to Adelmo's Ristorante!")
    } else {
        null
    }
};

function dallasItalian$$$$() {
    const italian = document.getElementById('italian'); 
    const four = document.getElementById('four');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 1 && dallas.checked === true && italian.checked == true && four.checked === true) {
        alert("Go to Saint Rocco's New York Italian!")
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked == true && four.checked === true) {
        alert('Go to Parigi Restaurant!')
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked == true && four.checked === true) {
        alert('Go to Zio Cecio!')
    } else {
        null
    }
};