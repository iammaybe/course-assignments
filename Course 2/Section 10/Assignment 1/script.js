const img = document.querySelector('img');

img.setAttribute('src', 'https://unsplash.it/600/400');
img.setAttribute('alt', 'Random photo');

const printText = () => console.log('text');

setTimeout(printText, 2000);
