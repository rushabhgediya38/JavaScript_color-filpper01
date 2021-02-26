const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');



btn.addEventListener('click', function(){
    let hexcode_color = '#'
    for (let i=0; i<6; i++){
        hexcode_color += hex[random()]
    }

    color.textContent = hexcode_color;
    document.body.style.backgroundColor = hexcode_color;
})

function random(){
    return Math.floor(Math.random() * hex.length)
}