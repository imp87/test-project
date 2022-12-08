let burgers = ['Hamburger', 'Cheeseburger', 'Newyorker', 'Big Angus Cheese', 'Chrunchy Chicken', 'Grilled Chicken'];
let ingredients = ['mit Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise', 'mit zart schmelzendem Cheese, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise','mit 125g Rindfleisch, Sesam Br&ouml;tchen, Ketchup, Salat, Snack-Dip, zart schmelzendem Cheese, R&auml;stzwiebeln und sauren Gurken','mit Big Angus Rindfleisch, zart schmelzendem Cheese, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup, Mayonnaise und Senf','mit Crunchy Chicken, Tomaten, Salat und Mayonnaise', 'mit Grilled Chicken, Ciabatta-Br&ouml;tchen, Bergk&Auml;se, Rucola, roter Paprika, Chipotle-Sauce, Curry-Dip und Ketchup'];
let prices = [7.99, 8.99, 7.99, 10.99, 8.99, 9.99];

function render() {
    let content = document.getElementById('content')
    let restaurantInfo = document.getElementById('restaurant-info')
    let menuCards = document.getElementById('menu')
    content.innerHTML = ``;
    restaurantInfo.innerHTML = ``;
    content.innerHTML += loadHeader();
    restaurantInfo.innerHTML += loadRestaurantInfo();
    for (let i = 0; i < burgers.length; i++) {
        menuCards.innerHTML += loadMenu(i)
    }
}

function loadHeader() {
    return `
    <div id="header-menu" class="header-menu">
    <div id="title"><h2>Burgerando</h2></div>
    <div id="header-middle"><h2>79206 Breisach am Rhein</h2>
    <img class="gps" src="img/gps.png">
    </div>
    <div id="symbol-left"><img class="hamburger" src="img/hamburger.png"></div>
    </div>
    <div id="header" class="header"><img class="restaurant" src="img/restaurant.jpg"></div>
    
    `;
}

function loadRestaurantInfo(){
    return `
    <div>
    <h2 id="restaurant-name">Burgers&Beefs</h2>
    <div class="review">
    <img class="stars" src="img/starsIcon.png">
    <a>(43 Bewertungen)</a>
    </div>
    </div>
    `
}

function loadMenu(i){
    return `
    <div id="menu-card ${i}" class="menu-card">
    <h2>${burgers[i]}</h2>
    <p>${ingredients[i]}</p>
    <div class="add-menu" id="add-menu">
    <a href="#" onclick="pushToCart()" class="orderButton">Hinzufügen ${prices[i]}€</a>
    </div>
    </div>
    `
}

