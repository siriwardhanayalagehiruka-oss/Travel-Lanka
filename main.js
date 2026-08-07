let srideImage = document.querySelector("#slide_img");

let images = [
    "images/home_a.webp",
    "images/home_b.jpg",
    "images/home_c.jpg",
    "images/home_d.webp",
];

let length = images.length;
let i = 0;
console.log(length);

function slider() {
    if (i > length-1) {
        i = 0
    }

    srideImage.src = images[i];
    i++;

    setTimeout('slider()', 3000);
}