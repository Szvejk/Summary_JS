const wrapper = document.querySelector('.wrapper');
const selectColor = document.querySelector('#color');
const list = document.querySelector('#list');

/*
    1. generowanie kolorów
    2. wrzucenie kolorów na liste
    3. wyszukiwanie po inpucie
*/

const generateRandomColorNumber = () => {
	return Math.floor(Math.random() * 256);
};

const generateColor = () => {
	const li = document.createElement('li');
    const rgb=`${generateRandomColorNumber()},${generateRandomColorNumber()},${generateRandomColorNumber()}`
	li.style.color = `rgb(${rgb})`;
	getData(rgb).then((data)=>{
        li.textContent = `${data.name.value}`;
        list.appendChild(li);
    })
};

for (let i = 0; i < 20; i++) {
	generateColor();
}

// dodatkowe
async function getData(rgb) {
	const response = await fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`);
	const data = await response.json();
	return data;
}

// submit addEventListener -> ul -> li ->
// -> jak nie to display none
selectColor.addEventListener('input', (e) => {
	const allLi = Array.from(list.querySelectorAll('li'));

	// -> if textContent zawiera to co szukamy
	const searchValue = document.querySelector('#color').value;

	if (searchValue === '') {
		allLi.forEach((el) => {
			el.style.display = 'block';
		});
	} else {
		allLi.forEach((el) => {
			if (!el.textContent.includes(searchValue)) {
				el.style.display = 'none';
			}
		});
	}
});
