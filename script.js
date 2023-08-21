let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

let countDate = new Date("august 15, 2023 00:00:00").getTime();

function countDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countDown(); 
},1000)


// let items = [
//     {
//         id: 1,
//         discount: 33,
//         name: "banana",
//         price: 10.50
//     },
//     {
//         id: 2,
//         discount: 33,
//         name: "mango",
//         price: 10.50
//     },
//     {
//         id: 3,
//         discount: 33,
//         name: "apple",
//         price: 10.50
//     },
//     {
//         id: 4,
//         discount: 33,
//         name: "dragon fruit",
//         price: 10.50
//     },
//     {
//         id: 5,
//         discount: 33,
//         name: "grapes",
//         price: 10.50
//     },
//     {
//         id: 6,
//         discount: 33,
//         name: "jack fruit",
//         price: 10.50
//     },
//     {
//         id: 7,
//         discount: 33,
//         name: "water melon",
//         price: 10.50
//     },
//     {
//         id: 8,
//         discount: 33,
//         name: "orange",
//         price: 10.50
//     },
//     {
//         id: 9,
//         discount: 33,
//         name: "papaya",
//         price: 10.50
//     },
// ];

// let boxes_section = document.querySelector(".boxes1");

// let listCards  = [];
// function initApp(){
//     items.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('box');
//         newDiv.innerHTML = `
//         <span class="discount">-${value.discount}%</span>
//         <div class="icons">
//             <a href="#" class="fas fa-heart"></a>
//             <a href="#" class="fas fa-share"></a>
//             <a href="#" class="fas fa-eye"></a>
//         </div>
//         <img src="./pics/veg1.jpeg" alt="product">
//         <h3>${value.name}</h3>
//         <div class="stars">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>

//         </div>
//         <div class="price"> ${value.price} <span> $13.20 </span> </div>
//         <div class="quantity">
//             <span>quantity:</span>
//             <input type="number" min="1" max="1000" value="1">
//             <span> /kg </span>
//         </div>
//         <a href="#" class="btn">add to cart</a>`;
//         boxes_section.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="images/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }