const photos = document.querySelector('.flex');
const allPhotos = document.querySelectorAll('.gallery.img');
const allTitles = document.querySelectorAll('.title');

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
		// photos.innerHTML =
		// 	`
		// <div class="gallery img">
		// 			<div class="title">${data[index].author}</div>
		// 		</div>`;
		element.innerHTML = data[index].author
	});
	allPhotos.forEach((element, index) => {
		element.style.backgroundImage = `url(${data[index].download_url})`;
	});
});

/*
Generator formularzy
const inputs=[
	{name: 'Imie',type: 'text', label: 'Imie2'}
]

function generateForm=(inputs)=>{
	inputs.forEach((el)=>{
		// stworzyc inputa
		// stworzyc label
		// nadac name do inputa
		// nadac typ

		-> HTML
		<div>
			<label>Imie2</label>
			<input name="Imie" type="text" />
		</div>
	})
}
*/

// Blog admin

/*

*/