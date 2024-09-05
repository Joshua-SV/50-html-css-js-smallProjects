// Javascript

// select all boxes
const boxes = document.querySelectorAll('.box');


// create event listener when user scrolls
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // we want our trigger height to be a little less than the original height because we want our boxes to show properly on screen
    const triggerHeight = window.innerHeight / 5 * 4;

    boxes.forEach( (box) => {
        const topBox = box.getBoundingClientRect().top;

        if (topBox < triggerHeight) {
            box.classList.add('showBox');// add the class show box to boxes that fit the screen trigger
        }
        else {
            box.classList.remove('showBox');
        }
    })
}

