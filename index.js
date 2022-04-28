const btn = document.getElementById('button')
btn.addEventListener("click", valid);
btn.addEventListener("click", dallasItalian$);
btn.addEventListener("click", dallasItalian$$);
btn.addEventListener("click", dallasItalian$$$);
btn.addEventListener("click", dallasItalian$$$$);
btn.addEventListener("click", dallasAmerican$);
btn.addEventListener("click", dallasAmerican$$);
btn.addEventListener("click", dallasAmerican$$$);
btn.addEventListener("click", dallasAmerican$$$$);
btn.addEventListener("click", dallasMexican$);
btn.addEventListener("click", dallasMexican$$);
btn.addEventListener("click", dallasMexican$$$);
btn.addEventListener("click", dallasMexican$$$$);
btn.addEventListener("click", dallasSeafood$);
btn.addEventListener("click", dallasSeafood$$);
btn.addEventListener("click", dallasSeafood$$$);

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
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Roma's Pizza & Italian</u>!<br><br><br>7033 Greenville Ave Suite 101, Dallas, TX 75231<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Sun: 10AM-10:30PM"
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Italia Express</u>!<br><br><br>111 Continental Ave #300, Dallas, TX 75207<br><br><br>Hours:<br><br>Mon-Fri: 10AM-10PM<br>Sat: 11AM-4PM<br>Sun: Closed"
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Franki's Pizza & Pasta</u>!<br><br><br>11722 Marsh Lane #202, Dallas, TX 75229<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM<br>Sun: 11AM-10PM"
    } else if(randomNumber === 4 && dallas.checked === true && italian.checked && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Bellatrino Pizzeria</u>!<br><br><br>920 S Harwood Street #120, Dallas, TX 75021<br><br><br>Hours:<br><br>Mon-Sun: 11AM-7PM"
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
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Nonna</u>!<br><br><br>4115 Lomo Alto Drive, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Thurs: 5:30PM-9PM<br>Fri: 11:30AM-2PM, 5:30PM-9:30PM<br>Sat: 5:30PM-9:30PM<br>Sun: Closed"
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>North Italia</u>!<br><br><br>2301 N Akard Street #280, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 10AM-11PM<br>Sun: 10AM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Taverna</u>!<br><br><br>3312 Knox Street, Dallas, TX 75205<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 10AM-11PM<br>Sun: 10AM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Amore Italian Restaurant</u>!<br><br><br>6931 Snider Plaza, Dallas, TX 75205<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 5PM-10PM<br>Sun: Closed"
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
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Bugatti Ristorante</u>!<br><br><br>3802 W Northwest Hwy, Dallas, TX 75220<br><br><br>Hours:<br><br>Tues-Sat: 5PM-10PM<br>Weds-Fri: 11AM-2PM, 5PM-10PM"
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Lucia</u>!<br><br><br>287 N Bishop Avenue, Dallas, TX 75208<br><br><br>Hours:<br><br>Mon&Sun: Closed<br>Tues-Sat: 5PM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Adelmo's Ristorante</u>!<br><br><br>5450 W Lovers Lane #225, Dallas, TX 75209<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Thurs: 5PM-9:30PM<br>Fri-Sun: 5PM-10PM"
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
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Saint Rocco's New York Italian</u>!<br><br><br>3011 Gulden Lane #100, Dallas, TX 75212<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Thurs & Sun: 5PM-9PM<br>Fri-Sat: 5PM-10PM"
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked == true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Parigi Restaurant</u>!<br><br><br>3311 Oak Lawn Ave, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Fri: 11:30AM-10PM<br>Sat: 10:30AM-10PM<br>Sun: 10:30AM-2:30PM"
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked == true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Zio Cecio</u>!<br><br><br>4615 W Lovers Lane, Dallas, TX 75209<br><br><br>Hours:<br><br>Mon&Sun: Closed<br>Tues-Sat: 5PM-10PM"
    } else {
        null
    }
};

// checking if dallas, american, how many $ were checked, and randomizing a restaurant
function dallasAmerican$() {
    const american = document.getElementById('american'); 
    const one = document.getElementById('one');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Harvey B's</u>!<br><br><br>4506 Columbia Avenue #100, Dallas, TX 75226<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-8PM<br>Fri-Sat: 11AM-9PM<br>Sun: 12PM-8PM"
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Gator's Dallas</u>!<br><br><br>1714 N Market Street, Dallas, TX 75202<br><br><br>Hours:<br><br>Sun-Thurs: 12PM-10PM<br>Fri-Sat: 12PM-1AM"
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Café 43</u>!<br><br><br>2943 SMU Boulevard, Dallas, TX 75205<br><br><br>Hours:<br><br>Mon-Sat: 11AM-2:30PM<br>Sun: Closed"
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Circle Grill</u>!<br><br><br>3701 N Buckner Boulevard, Dallas, TX 75228<br><br><br>Hours:<br><br>Sun-Thurs: 7AM-3PM<br>Fri-Sat: 7AM-9PM"
    } else {
        null
    }
};

function dallasAmerican$$() {
    const american = document.getElementById('american'); 
    const two = document.getElementById('two');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Doc B's</u>!<br><br><br>2021 McKinney Avenue #190, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 12PM-10PM<br>Sun: Closed"
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Henry</u>!<br><br><br>2301 N Akard Street, Dallas, TX 75201<br><br><br>Hours:<br><br>Sun-Thurs: 8AM-10PM<br>Fri-Sat: 8AM-11PM"
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Hudson House</u>!<br><br><br>4448 Lovers Lane, Dallas, TX 75225<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 10AM-10PM<br>Sun: 10AM-9PM"
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>HG Sply Co</u>!<br><br><br>2008 Greenville Avenue, Dallas, TX 75206<br><br><br>Hours:<br><br>Mon-Fri: 11AM-12AM<br>Sat-Sun: 10AM-12AM"
    } else {
        null
    }
};

function dallasAmerican$$$() {
    const american = document.getElementById('american'); 
    const three = document.getElementById('three');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber === 1 && dallas.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Hillstone</u>!<br><br><br>8300 Preston Road, Dallas, TX 75225<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM<br>Sun: 11AM-9PM"
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Woodlands American Grill</u>!<br><br><br>6073 Forest Lane, Dallas, TX 75230<br><br><br>Hours:<br><br>Mon-Fri: 11AM-10PM<br>Sat: 10AM-10PM<br>Sun: 10AM-9PM"
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Saint Ann Restaurant & Bar</u>!<br><br><br>2501 N Harwood Street, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Tues: Closed<br>Weds-Thurs: 11AM-3PM, 4PM-10PM<br>Fri: 11AM-3PM, 4PM-11PM<br>Sat: 10AM-3PM, 4PM-11PM<br>Sun: 10AM-5PM"
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Up on Knox</u>!<br><br><br>3230 Knox Street #140, Dallas, TX 75205<br><br><br>Hours:<br><br>Tues-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 9:30AM-11PM<br>Sun: 9:30AM-3:30PM"
    } else if (randomNumber === 5 && dallas.checked === true && american.checked === true && three.checked === true) {
         document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Mercury</u>!<br><br><br>11909 Preston Road #1418, Dallas, TX 75230<br><br><br>Hours:<br><br>Mon-Fri: 11AM-10PM<br>Sat: 4PM-10PM<br>Sun: Closed"
    } else {
        null
    }
};

function dallasAmerican$$$$() {
    const american = document.getElementById('american'); 
    const four = document.getElementById('four');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Fearing's Restaurant</u>!<br><br><br>2121 McKinney Avenue, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon&Sun: Closed<br>Tues: 5:30PM-10PM<br>Weds-Sat: 11:30AM-1:30PM, 5:30PM-10PM"
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Capital Grille</u>!<br><br><br>500 Crescent Court, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 5PM-10PM<br>Sun: 5PM-9PM"
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Knife Dallas</u>!<br><br><br>5300 E Mockingbird Lane, Dallas, TX 75206<br><br><br>Hours:<br><br>Mon-Sun: 10AM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Mansion Restaurant</u>!<br><br><br>2821 Turtle Creek Boulevard, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon&Sun: 7AM-10:30AM, 11AM-2PM<br>Tues-Weds: 7AM-10:30AM, 11AM-2PM, 6PM-9PM<br>Thurs-Sat: 7AM-10:30AM, 11AM-2PM, 6PM-9:30PM"
    } else {
        null
    }
};

function dallasMexican$() {
    const mexican = document.getElementById('mexican'); 
    const one = document.getElementById('one');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Campuzano Mexican Food</u>!<br><br><br>2618 Oak Lawn Avenue, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10:30PM<br>Fri: 11AM-11:30PM<br>Sat: 10AM-11:30PM<br>Sun: 10AM-10:30PM"
    } else if (randomNumber === 2 && dallas.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Gonzalez Restaurant</u>!<br><br><br>367 E Jefferson Boulevard, Dallas, TX 75208<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Thurs: 11AM-7PM<br>Fri: 11AM-9PM<br>Sat: 9AM-9PM<br>Sun: 9AM-7PM"
    } else if (randomNumber === 3 && dallas.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Tipico's</u>!<br><br><br>3118 W Northwest Highway, Dallas, TX 75220<br><br><br>Hours:<br><br>Mon-Sun: 7:30AM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Avila's Mexican Restaurant</u>!<br><br><br>4714 Maple Avenue, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM<br>Sun: 11AM-8PM"
    } else {
        null
    }
};

function dallasMexican$$() {
    const mexican = document.getElementById('mexican'); 
    const two = document.getElementById('two');
    const dallas = document.getElementById('dallas');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mi Cocina</u>!<br><br><br>11661 Preston Road #138, Dallas, TX 75230<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM"
    } else if (randomNumber === 2 && dallas.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Pappasito's Cantina</u>!<br><br><br>10433 Lombardy Lane, Dallas, TX 75220<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Desperados Mexican Restaurant</u>!<br><br><br>4818 Greenville Avenue, Dallas, TX 75206<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10:30PM<br>Sun: 11AM-9PM"
    } else if (randomNumber === 4 && dallas.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Jose</u>!<br><br><br>4931 W Lovers Lane, Dallas, TX 75209<br><br><br>Hours:<br><br>Sun-Tues: 11AM-9:30PM<br>Weds-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM"
    } else {
        null
    }
};

function dallasMexican$$$() {
    const mexican = document.getElementById('mexican'); 
    const three = document.getElementById('three');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mesero - Victory Park</u>!<br><br><br>2375 Victory Park Lane Suite 180, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri: 11AM-10:30PM<br>Sat: 10AM-10:30PM<br>Sun: 10AM-9:30PM"
    } else if (randomNumber === 2 && dallas.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>El Bolero</u>!<br><br><br>1201 Oak Lawn Avenue #160, Dallas, TX 75207<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 10AM-11PM<br>Sun: 10AM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>El Ranchito</u>!<br><br><br>610 Jefferson Boulevard, Dallas, TX 75208<br><br><br>Hours:<br><br>Sun-Thurs: 10AM-9PM<br>Fri-Sat: 10AM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Meso Maya Comida y Copas</u>!<br><br><br>1611 McKinney Avenue, Dallas, TX 75202<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM"
    } else {
        null
    }
};

function dallasMexican$$$$() {
    const mexican = document.getElementById('mexican'); 
    const four = document.getElementById('four');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 1 && dallas.checked === true && mexican.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Market Cocina</u>!<br><br><br>2510 McKinney Avenue, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Sun: 8AM-8PM"
    } else if (randomNumber === 2 && dallas.checked === true && mexican.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Javier's Gourmet Mexicano</u>!<br><br><br>4912 Cole Avenue, Dallas, TX 75205<br><br><br>Hours:<br><br>Sun-Weds: 5PM-10PM<br>Thurs: 5PM-10:30PM<br>Fri-Sat: 5PM-11PM"
    } else {
        null
    }
};

function dallasSeafood$() {
    const seafood = document.getElementById('seafood'); 
    const one = document.getElementById('one');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Seafood Connection</u>!<br><br><br>1427 E Illinois Avenue, Dallas, TX 75216<br><br><br>Hours:<br><br>Mon-Sat: 11AM-9PM<br>Sun: Closed"
    } else if (randomNumber === 2 && dallas.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>John's Seafood</u>!<br><br><br>4925 Bonnie View Road, Dallas, TX 75241<br><br><br>Hours:<br><br>Mon-Sat: 11AM-9PM<br>Sun: Closed"
    } else if (randomNumber === 3 && dallas.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Paradise Cajun Seafood</u>!<br><br><br>3636 Frankford Road Suite 300, Dallas, TX 75287<br><br><br>Hours:<br><br>Mon-Sat: 11AM-9PM<br>Sun: Closed"
    } else if (randomNumber === 4 && dallas.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>TJ Cajun Seafood & Wings</u>!<br><br><br>11306 Lyndon B Johnson Freeway #200, Dallas, TX 75238<br><br><br>Hours:<br><br>Mon-Thurs: 10:30AM-9PM<br>Fri-Sat: 10:30AM-9:30PM<br>Sun: 12PM-7PM"
    } else {
        null
    }
};

function dallasSeafood$$() {
    const seafood = document.getElementById('seafood'); 
    const two = document.getElementById('two');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Boiling Crab</u>!<br><br><br>10560 Walnut Street #100, Dallas, TX 75243<br><br><br>Hours:<br><br>Mon-Fri: 3PM-10PM<br>Sat-Sun: 12PM-10PM"
    } else if (randomNumber === 2 && dallas.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Seafood Shack</u>!<br><br><br>11625 Webb Chapel Road, Dallas, TX 75229<br><br><br>Hours:<br><br>Mon-Fri: 11AM-10PM<br>Sat-Sun: 10:30AM-11PM"
    } else if (randomNumber === 3 && dallas.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Fish City Grill</u>!<br><br><br>7170 Skillman Street Suite 100, Dallas, TX 75231<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM<br>Sun: 11AM-9PM"
    } else if (randomNumber === 4 && dallas.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Flying Fish</u>!<br><br><br>6126 Luther Lane, Dallas, TX 75225<br><br><br>Hours:<br><br>Sun-Thurs: 7AM-9:30PM<br>Fri-Sat: 7AM-10PM"
    } else {
        null
    }
};

function dallasSeafood$$$() {
    const seafood = document.getElementById('seafood'); 
    const three = document.getElementById('three');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Truluck's Ocean's Finest Seafood & Crab</u>!<br><br><br>2401 McKinney Avenue, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Thurs: 11:30AM-2PM, 4:30PM-9PM<br>Fri: 11:30AM-2PM, 4:30PM-10PM<br>Sat: 4:30PM-10PM<br>Sun: 4:30PM-9PM"
    } else if (randomNumber === 2 && dallas.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Oceanaire Seafood Room</u>!<br><br><br>13340 Dallas Parkway, Dallas, TX 75240<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 5PM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Montlake Cut</u>!<br><br><br>8220 Westchester Drive, Dallas, TX 75225<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Thurs: 5PM-10PM<br>Fri-Sat: 5PM-11PM<br>Sun: 5PM-9PM"
    } else if (randomNumber === 4 && dallas.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Pappadeaux's Seafood Kitchen</u>!<br><br><br>3520 Oak Lawn Avenue, Dallas, TX 75219<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM"
    } else {
        null
    }
};