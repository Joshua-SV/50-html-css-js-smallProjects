// Javascript

const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

//variable for active circles
let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++

    //check current active does not exceed number if circles
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    //call function
    update()
})

prevBtn.addEventListener("click", () => {
    currentActive--

    //check current active does not exceed number if circles
    if (currentActive < 1) {
        currentActive = 1;
    }

    //call function
    update()
})

function update() {
    //loop through each circle
    circles.forEach((circle, index) => {
        //check that only circle that are less than current active are colored!!
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    //get all colored circles
    const actives = document.querySelectorAll(".active")

    //update progress line width
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    //de-activate prev button if active is 1
    if (currentActive === 1) {
        prevBtn.disabled = true;
    }
    //de-activate next btn if all circles colored
    else if (currentActive === circles.length) {
        nextBtn.disabled = true
    } else //activate both
    {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}