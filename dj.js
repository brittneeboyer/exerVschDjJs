const square = document.querySelector(".color-square");

const originalColor = square.style.backgroundColor;

let numClicks = 0;

function hover(element, color){
    element.addEventListener('mouseenter', e => element.style.background = color)
    element.addEventListener('mouseleave', e => element.style.background = originalColor)
}
hover(square, 'lightblue')

function click(element, color1, color2){
    element.addEventListener('mousedown', e => element.style.background = color1)
    element.addEventListener('mouseup', e => element.style.background = color2)
}
click(square, 'red', 'yellow')

function double(element, color3){
    element.addEventListener('dblclick', e => element.style.background = color3)
}
double(square, 'green')

document.addEventListener('scroll', function(){
    square.style.backgroundColor = 'orange'
})

document.addEventListener("keydown", function(element) {
    var colorkey = element.key
    console.log(colorkey)
    if(colorkey === "b"){square.style.backgroundColor = "lightblue"}
    else if(colorkey === "r"){square.style.backgroundColor = "red"}
    else if(colorkey === "y"){square.style.backgroundColor = "yellow"}
    else if(colorkey === "g"){square.style.backgroundColor = "green"}
    else if(colorkey === "o"){square.style.backgroundColor = "orange"}
    else{square.style.backgroundColor = "black"} 
    })