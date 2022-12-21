const wrapper = document.querySelector('.wrapper')
const selectColor = document.querySelector ('.selectColor')
const submitButton = document.querySelector('.submitButton')

async function getData() {
    const response = await fetch(' https://www.thecolorapi.com');
    const data = await response.json();
    return data;
}
getData().then((data) => {
    console.log(data)
})