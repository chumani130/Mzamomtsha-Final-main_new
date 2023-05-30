const newBackgroundColor = document.querySelector('.logo');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
};
newBackgroundColor.addEventListener("mouseover", changeBgColor);
