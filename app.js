//Get elements from DOM
const image = document.getElementById("cat-image");
const width = document.getElementById("span-width");
const height = document.getElementById("span-height");
const btn = document.getElementById("get-cat");

//Add event listener and fetch data from API

btn.addEventListener('click', async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data[0])
    image.src = data[0].url;
    width.innerHTML = data[0].width;
    height.innerHTML = data[0].height;
});