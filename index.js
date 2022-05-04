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
btn.addEventListener("click", dallasSeafood$$$$);
btn.addEventListener("click", dallasAsian$);
btn.addEventListener("click", dallasAsian$$);
btn.addEventListener("click", dallasAsian$$$);
btn.addEventListener("click", dallasAsian$$$$);
btn.addEventListener("click", fwItalian$);
btn.addEventListener("click", fwItalian$$);
btn.addEventListener("click", fwItalian$$$);
btn.addEventListener("click", fwItalian$$$$);
btn.addEventListener("click", fwAmerican$);
btn.addEventListener("click", fwAmerican$$);
btn.addEventListener("click", fwAmerican$$$);
btn.addEventListener("click", fwAmerican$$$$);
btn.addEventListener("click", fwMexican$);
btn.addEventListener("click", fwMexican$$);
btn.addEventListener("click", fwMexican$$$);
btn.addEventListener("click", fwMexican$$$$);
btn.addEventListener("click", fwSeafood$);
btn.addEventListener("click", fwSeafood$$);
btn.addEventListener("click", fwSeafood$$$);
btn.addEventListener("click", fwSeafood$$$$);
btn.addEventListener("click", fwAsian$);
btn.addEventListener("click", fwAsian$$);
btn.addEventListener("click", fwAsian$$$);
btn.addEventListener("click", fwAsian$$$$);

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

function dallasSeafood$$$$() {
    const seafood = document.getElementById('seafood'); 
    const four = document.getElementById('four');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Ocean Prime</u>!<br><br><br>2101 Cedar Springs Road #150, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Fri: 11:30AM-10PM<br>Sat: 4PM-10PM<br>Sun: 4PM-9PM"
    } else if (randomNumber === 2 && dallas.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Eddie V's Prime Seafood</u>!<br><br><br>4032 Oak Lawn Avenue Suite 100, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Sat: 4PM-10PM<br>Sun: 4PM-9PM"
    } else if (randomNumber === 3 && dallas.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Al Biernat's</u>!<br><br><br>4217 Oak Lawn Avenue, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon-Fri: 11AM-10PM<br>Sat: 11AM-2:30PM, 5PM-10PM<br>Sun: 11AM-2:30PM, 4:30PM-9PM"
    } else if (randomNumber === 4 && dallas.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Capital Grille</u>!<br><br><br>500 Crescent Court, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 5PM-10PM<br>Sun: 5PM-9PM"
    } else {
        null
    }
};

function dallasAsian$() {
    const asian = document.getElementById('asian'); 
    const one = document.getElementById('one');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Royal Wok</u>!<br><br><br>2560 Royal Lane Suite 100, Dallas, TX 75229<br><br><br>Hours:<br><br>Mon-Sun: 11AM-10PM"
    } else if (randomNumber === 2 && dallas.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Peking Kitchen</u>!<br><br><br>1710 Norman Drive, Dallas, TX 75211<br><br><br>Hours:<br><br>Sun-Thurs: 10AM-10PM<br>Fri-Sat: 10AM-10:30PM"
    } else if (randomNumber === 3 && dallas.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mei Mei Chinese Buffet</u>!<br><br><br>10455 N Central Expressway #123, Dallas, TX 75231<br><br><br>Hours:<br><br>Mon-Sun: 11AM-9:30PM"
    } else if (randomNumber === 4 && dallas.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Kuai Asian Cafe</u>!<br><br><br>13710 Dallas Parkway G, Dallas, TX 75240<br><br><br>Hours:<br><br>Mon-Fri: 7:30AM-8PM<br>Sat: 8:30AM-6PM<br>Sun: Closed"
    } else {
        null
    }
};

function dallasAsian$$() {
    const asian = document.getElementById('asian'); 
    const two = document.getElementById('two');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Family Thais Asian Bistro</u>!<br><br><br>208 N Market Street #150, Dallas, TX 75202<br><br><br>Hours:<br><br>Mon-Sun: 11AM-9PM"
    } else if (randomNumber === 2 && dallas.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Jia Modern Chinese</u>!<br><br><br>8411 Preston Road Suite 132, Dallas, TX 75225<br><br><br>Hours:<br><br>Mon-Sun: 4PM-10PM"
    } else if (randomNumber === 3 && dallas.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>May Dragon Chinese</u>!<br><br><br>4848 Belt Line Road, Dallas, TX 75254<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 12PM-11PM<br>Sun: 12PM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Royal China</u>!<br><br><br>6025 Royal Lane #201, Dallas, TX 75230<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-2:30PM, 4:30PM-9PM<br>Fri: 11AM-2:30PM, 4:30PM-9:30PM<br>Sat: 4:30PM-9:30PM"
    } else {
        null
    }
};

function dallasAsian$$$() {
    const asian = document.getElementById('asian'); 
    const three = document.getElementById('three');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && dallas.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Shinsei Restaurant</u>!<br><br><br>7713 Inwood Road, Dallas, TX 75209<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-10PM<br>Fri-Sat: 5PM-11PM<br>Sun: Closed"
    } else if (randomNumber === 2 && dallas.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Uchi</u>!<br><br><br>2817 Maple Avenue, Dallas, TX 75201<br><br><br>Hours:<br><br>Sun-Thurs: 4PM-10PM<br>Fri-Sat: 4PM-11PM"
    } else if (randomNumber === 3 && dallas.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Steel Sushi Restaurant & Lounge</u>!<br><br><br>3180 Welborn Street, Dallas, TX 75219<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Sun: 5:30PM-10PM"
    } else if (randomNumber === 4 && dallas.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Tei-An</u>!<br><br><br>1722 Routh Street #110, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon&Sun: Closed<br>Tues-Thurs: 11:30AM-1:30PM, 6PM-9:30PM<br>Fri: 11:30AM-1:30PM, 5:30PM-9:30PM<br>Sat: 5:30PM-9:30PM"
    } else {
        null
    }
};

function dallasAsian$$$$() {
    const asian = document.getElementById('asian'); 
    const four = document.getElementById('four');
    const dallas = document.getElementById('dallas'); 

    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 1 && dallas.checked === true && asian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Five Sixty by Wolfgang Puck</u>!<br><br><br>300 Reunion Tower Boulevard E, Dallas, TX 75207<br><br><br>Hours:<br><br>Sun-Thurs: 5PM-10PM<br>Fri-Sat: 5PM-11PM"
    } else if (randomNumber === 2 && dallas.checked === true && asian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Nobu Dallas</u>!<br><br><br>400 Crescent Court, Dallas, TX 75201<br><br><br>Hours:<br><br>Mon-Sun: 5PM-10PM"
    }  else {
        null
    }
};

function fwItalian$() {
    const italian = document.getElementById('italian');
    const one = document.getElementById('one');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber === 1 && fw.checked === true && italian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Piada Italian Street Food</u>!<br><br><br>3300 Heritage Trace Parkway #100, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Mon-Sun: 10:45AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && italian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Joe's Pizza & Pasta</u>!<br><br><br>8645 N Beach Street, Fort Worth, TX 76244<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM<br>Sun: 11AM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && italian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Giovanni's Italian Kitchen</u>!<br><br><br>5733 Crowley Road, Fort Worth, TX 76134<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Fri: 4PM-9:45PM<br>Sat-Sun: 11AM-9:45PM"
    } else if (randomNumber === 4 && fw.checked === true && italian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Nikki's</u>!<br><br><br>2041 Rufe Snow Drive, Keller, TX 76248<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Sat: 11AM-9:30PM<br>Sun: 11AM-8:30PM"
    } else if (randomNumber === 5 && fw.checked === true && italian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mamma Mia Italian Grill & Pizza</u>!<br><br><br>3124 E Belknap Street, Fort Worth, TX 76111<br><br><br>Hours:<br><br>Mon-Sat: 11AM-9:30PM<br>Sun: Closed"
    } else {
        null
    }  
};

function fwItalian$$() {
    const italian = document.getElementById('italian');
    const two = document.getElementById('two');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Luigi's Italian Restaurant</u>!<br><br><br>4610 Western Center Boulevard #108, Fort Worth, TX 76137<br><br><br>Hours:<br><br>Weds-Mon: 3PM-11:30PM<br>Tues: Closed"
    } else if (randomNumber === 2 && fw.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Macaluso's Italian Restaunt</u>!<br><br><br>2443 Forest Park Boulevard, Fort Worth, TX 76109<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Sun: 11AM-8PM"
    } else if (randomNumber === 3 && fw.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Piola Italian Restaurant & Garden</u>!<br><br><br>3700 Mattison Avenue, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Sat: 4:30PM-9PM<br>Sun: Closed"
    } else if (randomNumber === 4 && fw.checked === true && italian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Oliva Italian Eatery</u>!<br><br><br>12477 Timberland Boulevard #633, Fort Worth, TX 76244<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 12PM-10PM"
    } else {
        null
    }  
};

function fwItalian$$$() {
    const italian = document.getElementById('italian');
    const three = document.getElementById('three');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Piccolo Mondo Italian Restaurant</u>!<br><br><br>829 E Lamar Boulevard, Arlington, TX 76011<br><br><br>Hours:<br><br>Mon-Thurs: 11:30AM-2PM, 5:30PM-9:30PM<br>Fri: 11:30AM-2PM, 5:30PM-10:30PM<br>Sat: 5:30PM-10:30PM<br>Sun: 5PM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Ferrari's Italian Villa & Chop House</u>!<br><br><br>1200 William D Tate Avenue, Grapevine, TX 76051<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-9:30PM<br>Fri-Sat: 5PM-10PM<br>Sun: 5PM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Al Dente Italian Trattoria</u>!<br><br><br>910 Houston Street #110, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Tues: Closed<br>Weds: 4:30PM-8PM<br>Thurs: 4PM-8PM<br>Fri-Sat: 11AM-9PM<br>Sun: 12PM-7PM"
    } else if (randomNumber === 4 && fw.checked === true && italian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Brio Italian Grille</u>!<br><br><br>1431 Plaza Place, Southlake, TX 76092<br><br><br>Hours:<br><br>Mon-Sun: 11AM-10PM"
    } else {
        null
    } 
};

function fwItalian$$$$() {
    const italian = document.getElementById('italian');
    const four = document.getElementById('four');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && italian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>il Modo</u>!<br><br><br>714 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun-Thurs: 6:30AM-2PM, 5PM-9PM<br>Fri-Sat: 6:30AM-2PM, 5PM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && italian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Calabrese Southlake</u>!<br><br><br>1281 E State Highway 114, Southlake, TX 76092<br><br><br>Hours:<br><br>Mon-Sun: 11AM-10PM"
    } else {
        null
    } 
};

function fwAmerican$() {
    const american = document.getElementById('american');
    const one = document.getElementById('one');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Kincaid's Hamburgers</u>!<br><br><br>3124 Texas Sage Trail, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Mon-Sat: 11AM-9PM<br>Sun: 11AM-7PM"
    } else if (randomNumber === 2 && fw.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Stevie's Diner</u>!<br><br><br>5500 N Tarrant Parkway #132, Fort Worth, TX 76244<br><br><br>Hours:<br><br>Mon-Sun: 7AM-2PM"
    } else if (randomNumber === 3 && fw.checked === true && american.checked === true && one.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Love Shack</u>!<br><br><br>110 E Exchange Avenue, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 4 && fw.checked === true && american.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Point on Lake Worth</u>!<br><br><br>1349 Bomber Road, Fort Worth, TX 76108<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-8PM<br>Fri-Sat: 11AM-9PM<br>Sun: 11AM-7PM"
    } else {
        null
    }
};

function fwAmerican$$() {
    const american = document.getElementById('american');
    const two = document.getElementById('two');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mash'D</u>!<br><br><br>2948 Crockett Street, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-11PM<br>Sat: 9AM-11PM<br>Sun: 9AM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Doc B's Restaurant</u>!<br><br><br>5253 Marathon Avenue, Fort Worth, TX 76109<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 3 && fw.checked === true && american.checked === true && two.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Reservoir</u>!<br><br><br>1001 Foch Street, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Fri: 3PM-2AM<br>Sat-Sun: 11AM-2AM"
    } else if (randomNumber === 4 && fw.checked === true && american.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>HG Sply Co</u>!<br><br><br>1621 River Run #176, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri: 11AM-11PM<br>Sat: 10AM-11PM<br>Sun: 10AM-10PM"
    } else {
        null
    }
};

function fwAmerican$$$() {
    const american = document.getElementById('american');
    const three = document.getElementById('three');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Del Frisco's Grille</u>!<br><br><br>154 E 3rd Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun&Mon: 11AM-9PM<br>Tues-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM<br>Sat: 9AM-11PM"
    } else if (randomNumber === 2 && fw.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>GRACE</u>!<br><br><br>777 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Sat: 4PM-9:30PM<br>Sun: 4PM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && american.checked === true && three.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Reata Restaurant</u>!<br><br><br>310 Houston Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-2:30PM, 5PM-8:30PM<br>Fri-Sat: 11AM-2:30PM, 5PM-9:30PM"
    } else if (randomNumber === 4 && fw.checked === true && american.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Texas de Brazil</u>!<br><br><br>101 N Houston Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-9PM<br>Fri: 11AM-2PM, 5PM-9:30PM<br>Sat: 4PM-9:30PM<br>Sun: 11AM-8:30PM"
    } else {
        null
    }
};

function fwAmerican$$$$() {
    const american = document.getElementById('american');
    const four = document.getElementById('four');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Capital Grille</u>!<br><br><br>800 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 4PM-10PM<br>Sun: 4PM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Lonesome Dove Fort Worth</u>!<br><br><br>2406 N Main Street, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-10PM<br>Fri-Sat: 11:30AM-2:30PM, 5PM-11PM<br>Sun: Closed"
    } else if (randomNumber === 3 && fw.checked === true && american.checked === true && four.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Del Frisco's Double Eagle Steakhouse</u>!<br><br><br>812 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-9PM<br>Fri: 5PM-10PM<br>Sat: 4PM-10PM<br>Sun: 4PM-9PM"
    } else if (randomNumber === 4 && fw.checked === true && american.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Bob's Steak & Chop House</u>!<br><br><br>1300 Houston Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 5PM-9PM<br>Fri-Sat: 5PM-10PM<br>Sun: Closed"
    } else {
        null
    }
};

function fwMexican$() {
    const mexican = document.getElementById('mexican');
    const one = document.getElementById('one');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Cabrito Nuevo Leon Restaurant</u>!<br><br><br>1544 Ellis Avenue, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Mon-Tues: Closed<br>Weds-Sun: 11AM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>El Paseo</u>!<br><br><br>5436 Jacksboro Highway, Fort Worth, TX 76114<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Sat: 11AM-9PM<br>Sun: 11AM-8PM"
    } else if (randomNumber === 3 && fw.checked === true && mexican.checked === true && one.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Esperanza's Restaurant & Bakery</u>!<br><br><br>2122 N Main Street, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Mon-Sun: 6:30AM-6:30PM"
    } else if (randomNumber === 4 && fw.checked === true && mexican.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Salsa Limón</u>!<br><br><br>550 Throckmorton Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun-Thurs: 9AM-8PM<br>Fri-Sat: 9AM-9PM"
    } else {
        null
    }
};

function fwMexican$$() {
    const mexican = document.getElementById('mexican');
    const two = document.getElementById('two');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Joe T. Garcia's</u>!<br><br><br>2201 N Commerce Street, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-2:30PM, 5PM-10PM<br>Fri-Sat: 11AM-11PM<br>Sun: 11AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mi Cocina</u>!<br><br><br>9369 Rain Lily Trail, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM"
    } else if (randomNumber === 3 && fw.checked === true && mexican.checked === true && two.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Los Vaqueros</u>!<br><br><br>2629 N Main Street, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Mon: Closed<br>Tues-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM<br>Sun: 10:30AM-9PM"
    } else if (randomNumber === 4 && fw.checked === true && mexican.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Lupe Tortilla</u>!<br><br><br>9409 N Freeway, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 9AM-10PM<br>Sun: 9AM-9PM"
    } else {
        null
    }
};

function fwMexican$$$() {
    const mexican = document.getElementById('mexican');
    const three = document.getElementById('three');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 1 && fw.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Toro Toro</u>!<br><br><br>200 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM<br>Sun: 10AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && mexican.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Maria's Mexican Kitchen</u>!<br><br><br>1712 S University Drive, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Fri: 11AM-10PM<br>Sat: 10AM-10PM<br>Sun: 10AM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && mexican.checked === true && three.checked == true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Market Cocina</u>!<br><br><br>3720 Vision Drive, Fort Worth, TX 76109<br><br><br>Hours:<br><br>Mon-Sun: 8AM-9PM"
    } else {
        null
    }
};

function fwMexican$$$$() {
    const mexican = document.getElementById('mexican');
    const four = document.getElementById('four');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 1 && fw.checked === true && mexican.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Mesero</u>!<br><br><br>4955 Gage Avenue, Fort Worth, TX 76109<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri: 11AM-10:30PM<br>Sat: 10AM-10:30PM<br>Sun: 10AM-9:30PM"
    } else if (randomNumber === 2 && fw.checked === true && mexican.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Reata</u>!<br><br><br>310 Houston Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-2:30PM, 5PM-8:30PM<br>Fri-Sat: 11AM-2:30PM, 5PM-9:30PM"
    } else {
        null
    }
};

function fwSeafood$() {
    const seafood = document.getElementById('seafood');
    const one = document.getElementById('one');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Dan's Seafood & Chicken</u>!<br><br><br>6719 Bridge Street, Fort Worth, TX 76112<br><br><br>Hours:<br><br>Mon-Sat: 10:30AM-9PM<br>Sun: Closed"
    } else if (randomNumber === 2 && fw.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Crawfish 7</u>!<br><br><br>5302 E Belknap Street, Fort Worth, TX 76117<br><br><br>Hours:<br><br>Mon, Weds-Sun: 9:30AM-8PM<br>Tues: Closed"
    } else if (randomNumber === 3 && fw.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Captain D's</u>!<br><br><br>8514 Highway 80 W, Fort Worth, TX 76116<br><br><br>Hours:<br><br>Mon-Sun: 10:30AM-10PM"
    } else if (randomNumber === 4 && fw.checked === true && seafood.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Don's Seafood</u>!<br><br><br>5109 Wichita Street, Fort Worth, TX 76119<br><br><br>Hours:<br><br>Mon-Thurs: 10AM-9PM<br>Fri-Sat: 10AM-10PM<br>Sun: Closed"
    } else {
        null
    }
};

function fwSeafood$$() {
    const seafood = document.getElementById('seafood');
    const two = document.getElementById('two');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Crab Station</u>!<br><br><br>2701 Bello, Jean Hills Lane #131, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Texas Pit Oyster Bar</u>!<br><br><br>3349 Western Center Boulevard, Fort Worth, TX 76137<br><br><br>Hours:<br><br>Sun-Weds: 11AM-9PM<br>Thurs-Sat: 11AM-10PM"
    } else if (randomNumber === 3 && fw.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Drunken Crab</u>!<br><br><br>2423 Clinton Avenue, Fort Worth, TX 76164<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-11PM"
    } else if (randomNumber === 4 && fw.checked === true && seafood.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Flying Fish</u>!<br><br><br>2913 Montgomery Street, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Sun: 11AM-10PM"
    } else {
        null
    }
};

function fwSeafood$$$() {
    const seafood = document.getElementById('seafood');
    const three = document.getElementById('three');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 1 && fw.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Krab Kingz</u>!<br><br><br>5250 N Tarrant Parkway, Fort Worth, TX 76137<br><br><br>Hours:<br><br>Mon&Sun: 1PM-9PM<br>Tues-Thurs: 12PM-10PM<br>Fri-Sat: 12PM-12AM"
    } else if (randomNumber === 2 && fw.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Pappadeaux Seafood Kitchen</u>!<br><br><br>2708 West Freeway, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM<br>Sun: 10AM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && seafood.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Waters Restaurant</u>!<br><br><br>301 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon&Sun: Closed<br>Tues-Sat: 4PM-9PM"
    } else {
        null
    }
};

function fwSeafood$$$$() {
    const seafood = document.getElementById('seafood');
    const four = document.getElementById('four');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 1 && fw.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>The Capital Grille</u>!<br><br><br>800 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 4PM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Del Frisco's Double Eagle Steakhouse</u>!<br><br><br>812 Main Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon: 5PM-9PM<br>Tues-Thurs: 5PM-10PM<br>Fri: 5PM-11PM<br>Sat: 4PM-11PM<br>Sun:11AM-9PM"
    } else if (randomNumber === 3 && fw.checked === true && seafood.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Eddie V's Prime Seafood</u>!<br><br><br>3100 W 7th Street, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Thurs: 4PM-10PM<br>Fri-Sat: 4PM-11PM<br>Sun: 11AM-9PM"
    } else {
        null
    }
};

function fwAsian$() {
    const asian = document.getElementById('asian');
    const one = document.getElementById('one');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Taste of Asia</u>!<br><br><br>7420 N Beach Street #250, Fort Worth, TX 76137<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Tom's Asian Bistro</u>!<br><br><br>2977 S Precinct Line Road, Fort Worth, TX 76118<br><br><br>Hours:<br><br>Mon-Sun: 10AM-10PM"
    } else if (randomNumber === 3 && fw.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>China One Xpress</u>!<br><br><br>6612 Brentwood Stair Road #100, Fort Worth, TX 76112<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-10PM<br>Fri-Sat: 11AM-10:30PM<br>Sun: 11AM-9PM"
    } else if (randomNumber === 4 && fw.checked === true && asian.checked === true && one.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Asian Gourmet</u>!<br><br><br>1550 Eastchase Parkway, Fort Worth, TX 76120<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM<br>Sun: Closed"
    } else {
        null
    }
};

function fwAsian$$() {
    const asian = document.getElementById('asian');
    const two = document.getElementById('two');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>P.F. Chang's</u>!<br><br><br>400 Throckmorton Street, Fort Worth, TX 76102<br><br><br>Hours:<br><br>Mon-Sun: 11AM-10PM"
    } else if (randomNumber === 2 && fw.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Green Tea House</u>!<br><br><br>3400 Texas Sage Trail #116, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10PM"
    } else if (randomNumber === 3 && fw.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Szechuan</u>!<br><br><br>5712 Locke Avenue, Fort Worth, TX 76107<br><br><br>Hours:<br><br>Mon-Sun: 11AM-9PM"
    } else if (randomNumber === 4 && fw.checked === true && asian.checked === true && two.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Pei Wei Asian Kitchen</u>!<br><br><br>2901 Heritage Trace Parkway, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-8PM<br>Fri-Sat: 11AM-8:30PM"
    } else {
        null
    }
};

function fwAsian$$$() {
    const asian = document.getElementById('asian');
    const three = document.getElementById('three');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>HK Sushi</u>!<br><br><br>6801 Rufe Snow Drive #100, Watauga, TX 76148<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 11:30AM-10PM<br>Sun: 11:30AM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && asian.checked === true && three.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Kyodai Handroll Bar</u>!<br><br><br>2825 Heritage Trace Parkway, Fort Worth, TX 76177<br><br><br>Hours:<br><br>Mon & Weds-Sat: 11AM-2:30PM, 5PM-10PM<br>Tues: Closed<br>Sun: 12PM-2:30PM, 5PM-9PM"
    } else {
        null
    }
};

function fwAsian$$$$() {
    const asian = document.getElementById('asian');
    const four = document.getElementById('four');
    const fw = document.getElementById('fort-worth');

    const randomNumber = Math.floor(Math.random() * 5)

    if (randomNumber === 1 && fw.checked === true && asian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Takara Japanese Steakhouse</u>!<br><br><br>7536 26 Boulevard, North Richland Hills, TX 76180<br><br><br>Hours:<br><br>Mon-Thurs: 11AM-9PM<br>Fri: 11AM-10PM<br>Sat: 11:30AM-10PM<br>Sun: 11:30AM-9PM"
    } else if (randomNumber === 2 && fw.checked === true && asian.checked === true && four.checked === true) {
        document.getElementById('output').innerHTML="<br><br><br>Go to <u>Akarii Revolving Sushi</u>!<br><br><br>3341 E Broad Street #101, Mansfield, TX 76063<br><br><br>Hours:<br><br>Sun-Thurs: 11AM-9:30PM<br>Fri-Sat: 11AM-10:30PM"
    } else {
        null
    }
};