// Javascript

const loadText = document.querySelector(".loading-text")
const backGrd = document.querySelector(".background")


let load = 0;

//will update integer every timeout using bluer function
let integer = setInterval(bluer, 30)


function bluer() {
    load++;

    // let's stop integer from updating further than 100
    if (load > 99) {
        clearInterval(integer)
    }

    // update front page percentage
    loadText.innerText = `${load}%`;
    // start opacity and update it
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //update blur image
    backGrd.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


//declare a function that update one range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}


