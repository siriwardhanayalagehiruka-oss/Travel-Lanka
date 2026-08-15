






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


//special containers

const destinations = [
    {
          Day1: "Day1 - Colombo",
          description1:"Explore the capital city gall Face green and local market",

          Day2: "Day2 Sigiriya",
          description2: "Visit Sigiriya Rock Fortress and the ancient city.",

          Day3: "Day 3 - Kandy",
          description3: "Visit the Temple of the Tooth Relic and Kandy Lake.",

          Day4: "Day 4 - Nuwara Eliya",
          description4: "Discover tea plantations and enjoy the cool climate.",

          Day5: "Day 5 - Ella",
          description5: "Visit Nine Arch Bridge and explore the beautiful Ella.",

          Day6: "Day 6 - Galle",
          description6: "Explore Galle Fort and the southern coast.",

          Day7: "Day 7 - Colombo",
          description7: "Return to Colombo and end your journey.",

          img1: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56V25h18v31M26 56V14h15v42M41 56V31h15v25M4 56h56"/><path d="M14 33h5M14 42h5M31 22h5M31 31h5M31 40h5M47 39h5M47 47h5"/></svg>',
          img2: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)"><path d="M7 54h50L49 39l-7-18-9-7-9 7-6 18L7 54z"/><path d="M22 21l10-8 10 8-5 5H27z" fill="white"/><path d="M16 39l9-7 7 5 7-5 9 7-4 5H20z" fill="white"/></svg>',
          img3: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M13 54V39h38v15M10 39h44L32 24 10 39zM19 33h26M24 54V42h16v12M28 24h8M32 10v14M26 17l6-7 6 7"/></svg>',
          img4: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 52C12 29 28 14 53 11c0 24-13 40-36 42-4 0-6-1-7-1z"/><path d="M11 52c11-12 22-21 37-30"/></svg>',
          img5: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 48h54M9 48V36M55 48V36M16 48V35M48 48V35"/><path d="M9 36c7-16 17-16 23 0 6-16 16-16 23 0M5 30h54"/></svg>',
          img6: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M12 54V27h40v27M9 27h46M12 27l5-8 5 8 5-8 5 8 5-8 5 8 5-8 5 8M25 54V40h14v14"/></svg>',
          img7: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)"><path d="M58 29L38 24 32 7h-6l2 18-17 1-6-7H1l4 11-4 11h4l6-7 17 1-2 18h6l6-17 20-5z"/></svg>',

          colour: "rgb(21, 50, 4)",

          plane: "One Week-Cultural Srilanka",

          duration: "7 Days/6 Nights",

          cost: "$700<span>/person</span>"
    },

    {
          Day1: "Day 1 - Bentota",
          description1:"Relax on the beach and enjoy water activities.",

          Day2: "Day 2 - Galle",
          description2: "Explore the historic Galle Fort and its charming streets.",

          Day3: "Day 3 - Unawatuna",
          description3: "Enjoy the clear waters and relax by the beach.",

          Day4: "Day 4 - Mirissa",
          description4: "Relax at Mirissa Beach and watch the sunset.",

          Day5: "Day 5 - Weligama",
          description5: "Explore the coastline and try surfing.",

          Day6: "Day 6 - Hikkaduwa",
          description6: "Enjoy the beach and marine life.",

          Day7: "Day 7 - Colombo",
          description7: "Return to Colombo and end your trip.",


          img1: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56V25h18v31M26 56V14h15v42M41 56V31h15v25M4 56h56"/><path d="M14 33h5M14 42h5M31 22h5M31 31h5M31 40h5M47 39h5M47 47h5"/></svg>',
          img2: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)"><path d="M7 54h50L49 39l-7-18-9-7-9 7-6 18L7 54z"/><path d="M22 21l10-8 10 8-5 5H27z" fill="white"/><path d="M16 39l9-7 7 5 7-5 9 7-4 5H20z" fill="white"/></svg>',
          img3: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M13 54V39h38v15M10 39h44L32 24 10 39zM19 33h26M24 54V42h16v12M28 24h8M32 10v14M26 17l6-7 6 7"/></svg>',
          img4: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 52C12 29 28 14 53 11c0 24-13 40-36 42-4 0-6-1-7-1z"/><path d="M11 52c11-12 22-21 37-30"/></svg>',
          img5: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 48h54M9 48V36M55 48V36M16 48V35M48 48V35"/><path d="M9 36c7-16 17-16 23 0 6-16 16-16 23 0M5 30h54"/></svg>',
          img6: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M12 54V27h40v27M9 27h46M12 27l5-8 5 8 5-8 5 8 5-8 5 8 5-8 5 8M25 54V40h14v14"/></svg>',
          img7: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(90, 60, 150)"><path d="M58 29L38 24 32 7h-6l2 18-17 1-6-7H1l4 11-4 11h4l6-7 17 1-2 18h6l6-17 20-5z"/></svg>',

          colour: "rgb(90, 60, 150)",

          plane: "One Week-Beach Escapa",

          duration: "7 Days/6 Nights",

          cost: "$700<span>/person</span>"

    },

    {
          Day1: "Day 1 - Kandy",
          description1:"Explore Kandy city and surrounding hills",

          Day2: "Day 2 - Nuwara Eliya",
          description2: "Discover tea plantations and stunning waterfalls.",

          Day3: "Day 3 - Ella",
          description3: "Hiking and breathtaking mountain views.",

          Day4: "Day 4 - Yala",
          description4: "Safari adventure in Yala National Park.",

          Day5: "Day 5 - Udawalawe",
          description5: "Visit Udawalawe National Park and see wild elephants.",

          Day6: "Day 6 - Sinharaja",
          description6: "Explore the Sinharaja Rainforest (UNESCO World Heritage).",

          Day7: "Day 7 - Colombo",
          description7: "Return to Colombo and end your journey.",


          img1: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56V25h18v31M26 56V14h15v42M41 56V31h15v25M4 56h56"/><path d="M14 33h5M14 42h5M31 22h5M31 31h5M31 40h5M47 39h5M47 47h5"/></svg>',
          img2: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)"><path d="M7 54h50L49 39l-7-18-9-7-9 7-6 18L7 54z"/><path d="M22 21l10-8 10 8-5 5H27z" fill="white"/><path d="M16 39l9-7 7 5 7-5 9 7-4 5H20z" fill="white"/></svg>',
          img3: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M13 54V39h38v15M10 39h44L32 24 10 39zM19 33h26M24 54V42h16v12M28 24h8M32 10v14M26 17l6-7 6 7"/></svg>',
          img4: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 52C12 29 28 14 53 11c0 24-13 40-36 42-4 0-6-1-7-1z"/><path d="M11 52c11-12 22-21 37-30"/></svg>',
          img5: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 48h54M9 48V36M55 48V36M16 48V35M48 48V35"/><path d="M9 36c7-16 17-16 23 0 6-16 16-16 23 0M5 30h54"/></svg>',
          img6: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M8 54h48M12 54V27h40v27M9 27h46M12 27l5-8 5 8 5-8 5 8 5-8 5 8 5-8 5 8M25 54V40h14v14"/></svg>',
          img7: '<svg id="svg_cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="rgb(21, 50, 4)"><path d="M58 29L38 24 32 7h-6l2 18-17 1-6-7H1l4 11-4 11h4l6-7 17 1-2 18h6l6-17 20-5z"/></svg>',

          colour: "rgb(21, 50, 4)",

          plane: "One Week-Nature & Adventure",

          duration: "7 Days/6 Nights",

          cost: "$700<span>/person</span>"
    }



];


destinations.forEach(place => {
    console.log(place);
});

const container = document.querySelector(".special_card_container");

if (container) {
    
destinations.forEach(destination => {
    container.innerHTML += `
        <div class="special_container">
                <img src="images/sigiriya-card-img.jpg" alt="">
                <h1 class="card_h1" style="color:${destination.colour}">${destination.plane}</h1>
                <p class="card_p" style="color:${destination.colour}">${destination.duration}</p>
                <div id="card_details">

                    <!-- images -->
                     <div style="grid-area: svg1; border: 2px solid ${destination.colour};" id="svg_div">${destination.img1}</div>
                     <div style="grid-area: svg2; border: 2px solid ${destination.colour};" id="svg_div">${destination.img2}</div>
                     <div style="grid-area: svg3; border: 2px solid ${destination.colour};" id="svg_div">${destination.img3}</div>
                     <div style="grid-area: svg4; border: 2px solid ${destination.colour};" id="svg_div">${destination.img4}</div>
                     <div style="grid-area: svg5; border: 2px solid ${destination.colour};" id="svg_div">${destination.img5}</div>
                     <div style="grid-area: svg6; border: 2px solid ${destination.colour};" id="svg_div">${destination.img6}</div>
                     <div style="grid-area: svg7; border: 2px solid ${destination.colour};" id="svg_div">${destination.img7}</div>




                    <!-- details -->
                    <div id="days" style="grid-area: day1;">
                        <h2>${destination.Day1}</h2>
                        <p>${destination.description1}</p>
                    </div>
                    <div id="days" style="grid-area: day2;">
                        <h2>${destination.Day2}</h2>
                        <p>${destination.description2}</p>
                    </div>
                    <div id="days" style="grid-area: day3;">
                        <h2>${destination.Day3}</h2>
                        <p>${destination.description3}</p>
                    </div>
                    <div id="days" style="grid-area: day4;">
                        <h2>${destination.Day4}</h2>
                        <p>${destination.description4}</p>
                    </div>
                    <div id="days" style="grid-area: day5;">
                        <h2>${destination.Day5}</h2>
                        <p>${destination.description5}</p>
                    </div>
                    <div id="days" style="grid-area: day6;">
                        <h2>${destination.Day6}</h2>
                        <p>${destination.description6}</p>
                    </div>
                    <div id="days" style="grid-area: day7;">
                        <h2>${destination.Day7}</h2>
                        <p>${destination.description7}</p>
                    </div>

                    <div class="price">
                      <h1>From</h1>
                      <p>${destination.cost}</p>

                      <button style="background: ${destination.colour}">View Details</button>
                    </div>
                </div>

            </div>
    `;
})

}








//holiday package
const holiday_javaScript = [
    {
          image: "images/Holiday/holyday1.jpg",
          type: "Cultural Triangle Tour",
          places:"Sigiriya . Kandy . Nuwara Eliya",
          price:"$450",
          people:"per person"
    },

    {
          image: "images/Holiday/holyday1.jpg",
          type: "Cultural Triangle Tour",
          places:"Sigiriya . Kandy . Nuwara Eliya",
          price:"$450",
          people:"per person"
    },

    {
          image: "images/Holiday/holyday1.jpg",
          type: "Cultural Triangle Tour",
          places:"Sigiriya . Kandy . Nuwara Eliya",
          price:"$450",
          people:"per person"
    },

    {
          image: "images/Holiday/holyday1.jpg",
          type: "Cultural Triangle Tour",
          places:"Sigiriya . Kandy . Nuwara Eliya",
          price:"$450",
          people:"per person"
    }

    
];


holiday_javaScript.forEach(place => {
    console.log(place);
});

const holiday_container = document.querySelector(".holiday_card_container");

if (holiday_container) {
    

holiday_javaScript.forEach(holiday => {
    holiday_container.innerHTML += `
        <div class="holiday_container">
                <div class="holiday_container_img">
                  <img src="${holiday.image}" alt="">
                </div>

                <div class="grid">
                    <div style="grid-area: Header;" class="header_div">
                      <h1>${holiday.type}</h1>
                      <p>${holiday.places}</p>
                    </div>

                    <div id="guidesvg" style="grid-area: guide1;">
                      <img src="svg2/hotel.svg" alt="">
                      <p>Guide</p>
                    </div>

                    <div id="guidesvg" style="grid-area: guide2;">
                      <img src="svg2/transport.svg" alt="">
                      <p>Guide</p>
                    </div>

                    <div id="guidesvg" style="grid-area: guide3;">
                      <img src="svg2/meals.svg" alt="">
                      <p>Guide</p>
                    </div>

                    <div id="guidesvg" style="grid-area: guide4;">
                      <img src="svg2/guide.svg" alt="">
                      <p>Guide</p>
                    </div>

                    <div style="grid-area: cost;" class="holiday_cost">
                      <p><span>${holiday.price}</span>${holiday_javaScript.people}</p>
                      <button>View Details</button>
                    </div>

                </div>
                
            
          </div>
        
    `;
})

}