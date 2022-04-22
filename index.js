const btn = document.getElementById('button')
btn.addEventListener("click", valid);
btn.addEventListener("click", dallasItalian$);
btn.addEventListener("click", dallasItalian$$);
btn.addEventListener("click", dallasItalian$$$);
btn.addEventListener("click", dallasItalian$$$$);
btn.addEventListener("click", dallasAmerican$);
btn.addEventListener("click", dallasAmerican$$);
btn.addEventListener("click", dallasAmerican$$$);

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
        alert("\n Go to Roma's Pizza & Italian! \n \n 7033 Greenville Ave Suite 101, Dallas, TX 75231 \n \n Hours: \n Mon: Closed \n Tues-Fri: 10AM-10:30PM")
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked && one.checked === true) {
        alert('\n Go to Italia Express! \n \n 111 Continental Ave #300, Dallas, TX 75207 \n \n Hours: \n Mon-Fri: 10AM-10PM \n Sat: 11AM-4PM \n Sun: Closed') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked && one.checked === true) {
        alert("\n Go to Franki's Pizza & Pasta! \n \n 11722 Marsh Lane #202, Dallas, TX 75229 \n \n Hours: \n Mon-Thurs: 11AM-9:30PM \n Fri-Sat: 11AM-10PM \n Sun: 11AM-10PM")
    } else if(randomNumber === 4 && dallas.checked === true && italian.checked && one.checked === true) {
        alert('\n Go to Bellatrino Pizzeria! \n \n 920 S Harwood Street #120, Dallas, TX 75021 \n \n Hours: \n Mon-Sun: 11AM-7PM')
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
        alert('\n Go to Nonna! \n \n 4115 Lomo Alto Drive, Dallas, TX 75219 \n \n Hours: \n Mon-Thurs: 5:30PM-9PM \n Fri: 11:30AM-2PM, 5:30PM-9:30PM \n Sat: 5:30PM-9:30PM \n Sun: Closed')
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('\n Go to North Italia! \n \n 2301 N Akard Street #280, Dallas, TX 75201 \n \n Hours: \n Mon-Thurs: 11AM-10PM \n Fri: 11AM-11PM \n Sat: 10AM-11PM \n Sun: 10AM-10PM') 
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('\n Go to Taverna! \n \n 3312 Knox Street, Dallas, TX 75205 \n \n Hours: \n Mon-Thurs: 11AM-10PM \n Fri: 11AM-11PM \n Sat: 10AM-11PM \n Sun: 10AM-10PM') 
    } else if (randomNumber === 4 && dallas.checked === true && italian.checked === true && two.checked === true) {
        alert('\n Go to Amore Italian Restaurant! \n \n 6931 Snider Plaza, Dallas, TX 75205 \n \n Hours: \n Mon-Thurs: 11AM-9PM \n Fri: 11AM-10PM \n Sat: 5PM-10PM \n Sun: Closed')
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
        alert('\n Go to Bugatti Ristorante! \n \n 3802 W Northwest Hwy, Dallas, TX 75220 \n \n Hours: \n Sat-Tues: 5PM-10PM \n Weds-Fri: 11AM-2PM, 5PM-10PM')
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked === true && three.checked === true) {
        alert('\n Go to Lucia! \n \n 287 N Bishop Avenue, Dallas, TX 75208 \n \n Hours: \n Mon&Sun: Closed \n Tues-Sat: 5PM-10PM')
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked === true && three.checked === true) {
        alert("\n Go to Adelmo's Ristorante! \n \n 5450 W Lovers Lane #225, Dallas, TX 75209 \n \n Hours: \n Mon: Closed \n Tues-Thurs: 5PM-9:30PM \n Fri-Sun: 5PM-10PM")
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
        alert("\n Go to Saint Rocco's New York Italian! \n \n 3011 Gulden Lane #100, Dallas, TX 75212 \n \n Hours: \n Mon: Closed \n Tues-Thurs & Sun: 5PM-9PM \n Fri-Sat: 5PM-10PM")
    } else if (randomNumber === 2 && dallas.checked === true && italian.checked == true && four.checked === true) {
        alert('\n Go to Parigi Restaurant! \n \n 3311 Oak Lawn Ave, Dallas, TX 75219 \n \n Hours: \n Mon-Fri: 11:30AM-10PM \n Sat: 10:30AM-10PM \n Sun: 10:30AM-2:30PM')
    } else if (randomNumber === 3 && dallas.checked === true && italian.checked == true && four.checked === true) {
        alert('\n Go to Zio Cecio! \n \n 4615 W Lovers Lane, Dallas, TX 75209 \n \n Hours: \n Mon&Sun: Closed \n Tues-Sat: 5PM-10PM')
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
        alert("\n Go to Harvey B's! \n \n 4506 Columbia Avenue #100, Dallas, TX 75226 \n \n Hours: \n Mon-Thurs: 11AM-8PM \n Fri-Sat: 11AM-9PM \n Sun: 12PM-8PM")
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && one.checked === true) {
        alert("\n Go to Gator's Dallas! \n \n 1714 N Market Street, Dallas, TX 75202 \n \n Hours: \n Sun-Thurs: 12PM-10PM \n Fri-Sat: 12PM-1AM")
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && one.checked === true) {
        alert('\n Go to Café 43! \n \n 2943 SMU Boulevard, Dallas, TX 75205 \n \n Hours: \n Mon-Sat: 11AM-2:30PM \n Sun: Closed')
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && one.checked === true) {
        alert('\n Go to Circle Grill! \n \n 3701 N Buckner Boulevard, Dallas, TX 75228 \n \n Hours: \n Sun-Thurs: 7AM-3PM \n Fri-Sat: 7AM-9PM')
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
        alert("\n Go to Doc B's! \n \n 2021 McKinney Avenue #190, Dallas, TX 75201 \n \n Hours: \n Mon-Thurs: 11AM-9PM \n Fri: 11AM-10PM \n Sat: 12PM-10PM \n Sun: Closed")
    } else if (randomNumber === 2 && dallas.checked === true && american.checked === true && two.checked === true) {
        alert('\n Go to The Henry! \n \n 2301 N Akard Street, Dallas, TX 75201 \n \n Hours: \n Sun-Thurs: 8AM-10PM \n Fri-Sat: 8AM-11PM')
    } else if (randomNumber === 3 && dallas.checked === true && american.checked === true && two.checked === true) {
        alert('\n Go to Hudson House! \n \n 4448 Lovers Lane, Dallas, TX 75225 \n \n Hours: \n Mon-Thurs: 11AM-9PM \n Fri: 11AM-10PM \n Sat: 10AM-10PM \n Sun: 10AM-9PM')
    } else if (randomNumber === 4 && dallas.checked === true && american.checked === true && two.checked === true) {
        alert('\n Go to HG Sply Co! \n \n 2008 Greenville Avenue, Dallas, TX 75206 \n \n Hours: \n Mon-Fri: 11AM-12AM \n Sat-Sun: 10AM-12AM')
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

