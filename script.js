const photos = document.querySelector('.flex');
const firstPhoto = document.querySelector('.gallery img1');
// const secondPhoto = document.querySelector('.gallery img2');
// const thirdPhoto = document.querySelector('.gallery img3');
// const fourPhoto = document.querySelector('.gallery img4');
// const fivePhoto = document.querySelector('.gallery img5');
// const sixPhoto = document.querySelector('.gallery img6');
// const sevenPhoto = document.querySelector('.gallery img7');
// const eightPhoto = document.querySelector('.gallery img8');
// const ninePhoto = document.querySelector('.gallery img9');
// const tenPhoto = document.querySelector('.gallery img10');
// const elevenPhoto = document.querySelector('.gallery img11');
// const twelvePhoto = document.querySelector('.gallery img12');


async function getData() {
    const response = await fetch("https://picsum.photos/200")
    const data = await response.json()
    return data
}
getData().then((foto) => {
foto.forEach((elem) => {
    window.onload = function () {
    let elem = document.createElement("img")
    document.getElementById("gallery img1").appendChild(elem);
}}
)})


// document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random()*images.length)] + ')';






//     localStorage['backgroundIndex'] = !localStorage['backgroundIndex']?0:+localStorage['backgroundIndex']+2>images.length?0:+localStorage['backgroundIndex']+1;




