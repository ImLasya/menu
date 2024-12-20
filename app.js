const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const all=document.getElementById("all");
const breakfast=document.getElementById("breakfast");
const lunch=document.getElementById("lunch");
const shakes=document.getElementById("shakes");
const dinner=document.getElementById("dinner");
const sectionCenter = document.querySelector(".section-center");

all.addEventListener('click',function(){
    let displayMenu = menu.map(function (item) {
        // console.log(item);
    
        return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
});
breakfast.addEventListener('click',function(){
    let displayMenu = menu.map(function (item) {
        // console.log(item);
        if("breakfast"===item.category){
            
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
        }
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
});

lunch.addEventListener('click',function(){
    let displayMenu = menu.map(function (item) {
        // console.log(item);
        if("lunch"===item.category){
            
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
        }
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
});

shakes.addEventListener('click',function(){
    let displayMenu = menu.map(function (item) {
        // console.log(item);
        if("shakes"===item.category){
            
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
        }
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
});

dinner.addEventListener('click',function(){
    let displayMenu = menu.map(function (item) {
        // console.log(item);
        if("dinner"===item.category){
            
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
        }
      });
      displayMenu = displayMenu.join("");
    //   console.log(displayMenu);
    
      sectionCenter.innerHTML = displayMenu;
});




// const all = document.getElementById("all");
// const breakfast = document.getElementById("breakfast");
// const lunch = document.getElementById("lunch");
// const shakes = document.getElementById("shakes");
// const dinner = document.getElementById("dinner");
// const sectionCenter = document.querySelector(".section-center");

// all.addEventListener('click', function() {
//     displayMenuItems(menu);  // Display all items
// });

// breakfast.addEventListener('click', function() {
//     const breakfastItems = menu.filter(item => item.category === "breakfast");
//     displayMenuItems(breakfastItems);  // Display only breakfast items
// });

// lunch.addEventListener('click', function() {
//     const lunchItems = menu.filter(item => item.category === "lunch");
//     displayMenuItems(lunchItems);  // Display only lunch items
// });

// shakes.addEventListener('click', function() {
//     const shakesItems = menu.filter(item => item.category === "shakes");
//     displayMenuItems(shakesItems);  // Display only shakes items
// });

// dinner.addEventListener('click', function() {
//     const dinnerItems = menu.filter(item => item.category === "dinner");
//     displayMenuItems(dinnerItems);  // Display only dinner items
// });

// function displayMenuItems(items) {
//     let displayMenu = items.map(function(item) {
//         return `<article class="menu-item">
//             <img src=${item.img} alt=${item.title} class="photo" />
//             <div class="item-info">
//                 <header>
//                     <h4>${item.title}</h4>
//                     <h4 class="price">$${item.price}</h4>
//                 </header>
//                 <p class="item-text">
//                     ${item.desc}
//                 </p>
//             </div>
//         </article>`;
//     });
//     displayMenu = displayMenu.join("");
//     sectionCenter.innerHTML = displayMenu;
// }

// // Initially, display all menu items
// displayMenuItems(menu);
