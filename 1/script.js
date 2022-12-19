const photos = document.querySelector('.flex');
const allPhotos = document.querySelectorAll('.gallery.img');
const allTitles = document.querySelectorAll('.title')

async function getData() {
	const randomNumbers = Math.floor(Math.random() * 20 + 1);
	const response = await fetch(
		`https://picsum.photos/v2/list?page=${randomNumbers}&limit=12`
	);
	const data = await response.json();
	return data;
}

getData().then((data) => {
	allTitles.forEach((element, index) => {
		element.innerHTML = data[index].author
	})
	allPhotos.forEach((element, index) => {
		element.style.backgroundImage = `url(${data[index].download_url})`;
	});
});

// getData().then((foto) => {
// 	foto.forEach((elem) => {
// 		console.log(elem.img);
// 	});
// 	// window.onload = function () {
// 	// 	let photo = document.createElement('img');
// 	// 	document.getElementsByClassName('gallery img').appendChild(photo);
// 	// };
// });
// img.addEventListener('click', () => {
// 	author - hidden.classList.remove('hidden');
// });
