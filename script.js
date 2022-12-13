// # Fotograf

// ## Story

// Na stronie głównej chciałbym wyświetlić galerię zdjęć w formie kafelek. Chciałbym żeby za każdym odswieżeniem strony pokazywały się inne zdjęcia. Chciałbym żeby po najechaniu na nie myszką pojawiła się na tle zdjęcia nazwa autora. Chciałbym aby na dole były przyciski prawo, lewo, które pozwalają na nawigowanie pomiędzy stronami w galerii

// ## Podpowiedź

// W celu przedstawienia rozwiązania klientowi zapoznaj się z API https://picsum.photos
// Wykorzystaj grida

// ## TODO
// - [ ] strona główna z kafelkami
// - [ ] losowanie zdjęć z API po załadowaniu strony
// - [ ] pobieranie informacji dla zdjęcia
// - [ ] obsługa przycisków na dole strony


// window.onload = function () {
//     var images = [
//         'image/A.png',
//         'image/B.png',
//         'image/C.png',
//         'image/D.png'
//     ];

//     localStorage['backgroundIndex'] = !localStorage['backgroundIndex']?0:+localStorage['backgroundIndex']+2>images.length?0:+localStorage['backgroundIndex']+1;

//     document.body.style.backgroundImage =  'url(' + images[+localStorage['backgroundIndex']] + ')';
// }