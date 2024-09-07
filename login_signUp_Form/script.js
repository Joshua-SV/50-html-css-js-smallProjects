// Javascript

const labels = document.querySelectorAll('.form-control label');


labels.forEach((label) => {
    let str = label.innerText.split('')
    .map((letter, indx) => {
        return `<span style="transition-delay:${indx * 70}ms">${letter}</span>`
    }).join('');
    // convert the text to array of letters then wrap these letters into spans then convert back to a string

    label.innerHTML = str;
});

