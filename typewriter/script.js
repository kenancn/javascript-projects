
const output = document.querySelector(".output");
//result
let res;

let typeSpeed = 180;
//removing/backspace speed
let removedSpeed = 100;
//Word Identifier
let id = 0;

//words to be typed
//"\xa0" = space
const words = [
    "Web\xa0Developer",
    "Logo\xa0Designer",
    "App\xa0Developer",
];

const colors = [
    "#4069ff",
    "#eb4034",
    "Orange",
];

let charCount = 0;

//set initial interval on the function
let time = setInterval(type, typeSpeed);

function type() {
    res = words[id].substr(0, charCount);
    //Change word color

    output.style.color = colors[id];

    if (charCount >= words[id].length + 3) {
        clearInterval(time);

        charCount = 1;

        time = setInterval(remove, removedSpeed)
    }

    output.innerHTML = res;

    charCount++;

}

function remove() {

    res = words[id].substr(0, words[id].length - charCount);

    if (res.length <= 0) {
        if (id >= words.length - 1) {
            id = 0;

        }
        else {
            id++;

        }

        clearInterval(time);

        charCount = 0;

        //Start Typing Again
        time= setInterval(type, typeSpeed);
    }

    output.innerHTML = res;

    charCount++;

}