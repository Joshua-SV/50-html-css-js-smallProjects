// Javascript

//query select the images called .panel
const panels = document.querySelectorAll(".panel");//stores each image into an array form

//now loop through the array and add an event listener when click image
panels.forEach((panel) => {
    panel.addEventListener( "click",() => {
        //remove previous images from class of active
        removeActive()//custom function

        //with each click on image add a class attribute of 'active;
        panel.classList.add("active")
    })
})

function removeActive()
{
    for (var i = 0; i < panels.length; ++i){
        panels[i].classList.remove("active")
    }
}