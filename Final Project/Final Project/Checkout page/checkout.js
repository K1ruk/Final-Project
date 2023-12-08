
function updateCart() {
  // Select all elements with class 'delivery-option'
  const deliveryOptions = document.querySelectorAll('.delivery-option');


  // Add an event listener to each delivery option
  deliveryOptions.forEach(option => {
    option.addEventListener('change', function () {

      // Get the data-price attribute value, remove kr 
      // using replace, and convert to a float
      const stringPrice = option.getAttribute('data-price');
      DeliveryPrice = parseFloat(stringPrice.replace('kr', '')) || 0;

      // Recalculate and update the total
      updateCart();
    });
  });

  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  let total = 0;
  let subtotal = 0;

  storedData.forEach(item => {
    total += item.subtotal || 0;
    subtotal += item.subtotal || 0;
  });


  // Update the total content element
  const totalContentElement = document.getElementById('total-content');
  totalContentElement.innerHTML = `
    <h4 class="headtotal">Subtotal: </h4>
    <p class="total">${subtotal} kr</p>
    <h4 class="headtotal">Delivery: </h4>
    <p class="total">${DeliveryPrice} kr</p>

    <h2 class="headtotal">Total: </h2>
    <p class="total">${total + DeliveryPrice} kr</p>
  `;
}



document.addEventListener('DOMContentLoaded', function () {

// Retrieve data from localStorage and making it into an array.
  const storedData = JSON.parse(localStorage.getItem('data')) || [];

  // Get the container where you want to display the data
  const cartContent = document.getElementById('cart-content');

  // Check if there is data to display
  if (storedData.length > 0) 
  {
    // Iterate through the stored data and create HTML elements
    storedData.forEach(item => {

      const itemElement = document.createElement('div');
      itemElement.classList.add("grid");
      itemElement.setAttribute("id","product");
      itemElement.innerHTML = `
        <h1 class="headTitle">${item.title}</h1>
        <p class="price">${item.price} kr</p>
        <p class="quantity">${item.amount}</p>
        <p class="subtotal">${item.subtotal} kr</p>
      `;
      cartContent.appendChild(itemElement);

    });
  } 

  else 
  {
    // Display a message if there is no data'
    cartContent.innerHTML = '<h1>Your cart is empty</h1>';
  }

    updateCart();

});  
let card = document.getElementById("payment1"); 
let paypalCard = document.getElementById("payment2");  
let klarna = document.getElementById("payment3");  
let cardInput = document.getElementById("cardInput");
let paypalInput = document.getElementById("paypalInput");
let klarnaInput = document.getElementById("klarnaInput");

function OpenCard(){  
  cardInput.checked = true;
  card.style.display = "grid";

  paypalInput.checked = false;
  klarnaInput.checked = false;

  paypalCard.style.display = "none";
  klarna.style.display = "none";
}
function OpenPaypal(){  
  paypalInput.checked = true;
    paypalCard.style.display = "grid";

  cardInput.checked = false;
  klarnaInput.checked = false;

  card.style.display = "none";
  klarna.style.display = "none";  


}

function OpenKlarna(){
  klarnaInput.checked = true;
  klarna.style.display = "grid";

  cardInput.checked = false;
  paypalInput.checked = false;

  card.style.display = "none";
  paypalCard.style.display = "none";  
}

function Payment(e){

  e.preventDefault();
  let getContainer = document.getElementById("container");
  let getWrapper = document.getElementById("wrapper");
  let getFooter = document.getElementById("footer");
  let x = Math.floor((Math.random() * 10000) + 1);

  getFooter.style.position = "absolute";
  getFooter.style.bottom = "0";
  getFooter.style.width = "100%";

  getContainer.style.display = "grid";
  getWrapper.style.display = "grid";

  const orderNumber = document.createElement('p');
  orderNumber.innerHTML = `<p class="price">Order Number: #${x} </p>`;

  const text = document.getElementById('text');

  text.appendChild(orderNumber);
  localStorage.clear();
}

function signup(){
  let login = document.getElementById("login");
  let signup = document.getElementById("signup");
  login.style.display = "none";
  signup.style.display = "grid"
}
function login(){
  let login = document.getElementById("login");
  let signup = document.getElementById("signup");
  login.style.display = "grid";
  signup.style.display = "none"
}

function deletelogin(event){
  //preventing Page refresh
  event.preventDefault();

  let login = document.getElementById("login");
  login.style.display = "none";
}
function goBack(){
  window.location.href = "/Index/index.html";
}



