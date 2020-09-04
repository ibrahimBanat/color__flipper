const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const foo = new Array(255);
const sheet = document.styleSheets;
const hText = document.getElementsByClassName('.heading__el');
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){ 
    let tiltDeg = 0;
    let turningAngle1 = 0;
    let turningAngle2 = 35;
    let turningAngle3 = 100;
    let opacity = 1;
    let sheet = document.createElement('style');
    sheet.innerHTML = `body { background: linear-gradient(${tiltDeg}deg, rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle1}%, 
    rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle2}%, rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle3}%) !important}`;
    document.body.appendChild(sheet);

    color.textContent = (`(${tiltDeg}deg, rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle1}%, 
    rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle2}%, rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, ${opacity}) ${turningAngle3}%)`)

    color.style.fontSize = "0.5em";
});





function getRandomNumber() { 
    return Math.floor(Math.random() * foo.length);
}