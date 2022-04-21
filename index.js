const btn = document.getElementById('button')
btn.addEventListener("click", valid);
btn.addEventListener("click", oneDollar);
btn.addEventListener("click", twoDollar);


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

function oneDollar() { // checking if dallas, italian, and one $ was checked and randomizes a restaurant
    const italian = document.getElementById('italian'); 
    const one = document.getElementById('one');  
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && italian.checked && one.checked) {
        alert("Go to Roma's Pizza & Italian!")
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked && one.checked) {
        alert('Go to Italia Express!') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked && one.checked) {
        alert("Go to Franki's Pizza & Pasta!")
    } else if(randomNumber === 4 && dallas.checked === true && italian.checked && one.checked) {
        alert('Go to Bellatrino Pizzeria!')
    } else {
        null
    }
};

function twoDollar() { // checking if dallas, italian, and two $$ was checked and randomizes a restaurant
    const italian = document.getElementById('italian');       // add more info to the results
    const two = document.getElementById('two');               // ex. address & hours
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)
    
    if (randomNumber === 1 && dallas.checked === true && italian.checked === true && two.checked) {
        alert('Go to Nonna!')
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && two.checked) {
        alert('Go to North Italia!') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && two.checked) {
        alert('Go to Taverna!') 
    } else if (randomNumber === 4 && dallas.checked === true && italian.checked === true && two.checked) {
        alert('Go to Amore Italian Restaurant!')
    } else {
        null
    }
};